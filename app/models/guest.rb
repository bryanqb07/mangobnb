class Guest < ApplicationRecord
  validates :name, :email, :booking_id, presence: true
end
