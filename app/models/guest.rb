class Guest < ApplicationRecord
  validates :name, :email, :gender, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  has_many :bookings
  has_one :room, :through => :bookings
end
