class User < ApplicationRecord
  has_secure_password

  attr_reader :password
  validates :username, :password_digest, :email, presence: true
  validates :username, :email, uniqueness: true
  validates :password_digest, presence: { message:  'Password can\'t be blank' }
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.authenticate(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
  end


  private
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

end
