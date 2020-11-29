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

  def last_med_com
    self.meditation_completions.order("created_at").last
  end

  def last_meditation_completed
    self.last_med_com.meditation if self.last_med_com
  end

  def current_user_pack
    med = self.last_meditation_completed
    pack = med.pack
    user_pack = self.user_packs.where(pack_id: pack.id).first
    if med.order >= pack.length
      ordered_user_packs = self.user_packs.order("created_at").to_a
      # wrap index around pack length
      next_idx = (ordered_user_packs.index(user_pack) + 1) % pack.length
      next_user_pack = ordered_user_packs[next_idx]
    else
      user_pack
    end
  end

  def current_meditation
    self.current_user_pack.current_meditation
  end

  def current_track
    return self.current_meditation.track if self.current_meditation
    return nil
  end

  def current_track_attached?
    return self.current_track.attached? if self.current_track
    return false
  end

end