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

  def user_pack_completed?(user_pack)
    med_com = self.meditation_completions.where(user_pack_id: user_pack.id)
    return true if user_pack.pack.length == med_com.length
    return false
  end  
  
  def user_meditations_completed(user_pack)
    med_com = self.meditation_completions.where(user_pack_id: user_pack.id)
    return med_com.length
  end
  
  def current_track(user_pack)
    return self.user_meditations_completed(user_pack) + 1
  end
  
  
end