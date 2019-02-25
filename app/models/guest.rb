class Guest < ApplicationRecord
  validates :name, :email, :gender, presence: true
  has_many :bookings

end
