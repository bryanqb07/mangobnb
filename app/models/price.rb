class Price < ApplicationRecord
  validates :price_date, :price, :room_id, presence: true
end
