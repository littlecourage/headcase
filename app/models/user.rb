class User < ApplicationRecord

  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 8 }, allow_nil: true
  validates :email, 
            :password_digest, 
            :session_token, 
            :first_name, 
            :last_name,
            presence: true

            
  after_initialize :ensure_session_token
            
  has_many :user_packs,
    foreign_key: :user_id,
    class_name: "UserPack"

  has_many :meditation_completions,
    through: :user_packs,
    source: :meditation_completions

  has_many :meditations,
    through: :user_packs,
    source: :meditations
            
  attr_reader :password

  def self.find_by_credentials(email, password) 
    user = User.find_by(email: email)
    unless user && user.is_password?(password) 
      return nil
    end
    return user
  end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    bc_password = BCrypt::Password.new(self.password_digest)
    return bc_password.is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.base64(64)
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64(64)
    self.save!
    self.session_token
  end

  def current_meditation
    last_meditation = self
      .meditation_completions
      .order("created_at")
      .last
      .meditation

    last_user_pack = last_meditation.user_packs.where(user_id: self.id).last

    if last_user_pack.user_pack_completed?
        next_meditation = self
        .meditation_completions
        .where.not(user_pack_id: last_user_pack.id)
        .order("created_at")
        .last
        .user_pack
        .current_track

        return next_meditation
    else
      return last_user_pack.current_track
    end

  end

end