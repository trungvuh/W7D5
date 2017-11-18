class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, uniqueness: true

  attr_reader :password

  before_validation :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    pass_hash = BCrypt::Password.new(self.password_digest)
    pass_hash.is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_baes64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_baes64
    self.save!
    self.session_token
  end

  def self.find_by_crenditials(username, password)
    @user = User.find_by(username: username)
    return nil if @user.nil?
    @user && @user.valid_password?(password) ? @user : nil
  end

end
