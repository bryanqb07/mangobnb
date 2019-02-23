class Booking < ApplicationRecord
  validates :start_date, :end_date, :guest_id, :room_id, :num_guests, :confirmation_code, presence: true
  validate :in_future
  validate :has_vacancy?
  belongs_to :guest
  belongs_to :room


  def self.generate_confirmation_code
    SecureRandom.hex(3)
  end

  def total_price
    total_price = 0
    prices = Price.where(["(price_date between ? and ? ) and room_id = ?" ,
      self.start_date, self.end_date, room_id])
    prices.each{ |price| total_price += price.price }
    total_price * self.num_guests
  end

  def in_future
    if self.start_date <= Date.today
      self.errors[:start_date] << "Start date cannot be in the past."
    end
  end

  def has_vacancy?
    raise("Must have at least one guest!") if self.num_guests < 1
    if self.num_guests > self.room.beds_available(self.start_date, self.end_date)
      self.errors[:guest_capacity] << "Room full for given dates."
    end
  end

end
