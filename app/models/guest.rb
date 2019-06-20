class Guest < ApplicationRecord
  validates :name, :email, :gender, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  has_many :bookings
  has_one :room, :through => :bookings
  # validate :confirmation_email_match
  #
  # def confirmation_email_match
  #   self.errors[:email] << "Invalid confirmation email" if self.email != self.confirmation_email
  # end

end
