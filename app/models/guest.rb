class Guest < ApplicationRecord
  validates :name, :email, presence: true
  has_many :bookings
  
end
