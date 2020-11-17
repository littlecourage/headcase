class User < ApplicationRecord

  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 8 }, allow_nil: true
  validates :email, 
            :password_digest, 
            :session_token, 
            :first_name, 
            :last_name,
            presence: true

  attr_reader :password

  after_initialize :ensure_session_token

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
  
end