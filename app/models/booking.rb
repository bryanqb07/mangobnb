class Booking < ApplicationRecord
  validates :start_date, :end_date, :guest_id, :room_id, :num_guests, :confirmation_code, presence: true
  validate :valid_dates
  validate :has_vacancy?
  validate :ensure_unique_confirmation_code
  validate :females_only
  belongs_to :guest
  belongs_to :room

  def self.generate_confirmation_code
    SecureRandom.hex(3)
  end

  def get_price
    total_price = 0
    prices = Price.where(["(price_date between ? and ? ) and room_id = ?" ,
      self.start_date, self.end_date - 1.day, room_id])
    prices.each{ |price| total_price += price.price }
    total_price * self.num_guests
  end

  def valid_dates
    if self.start_date <= Date.today
      self.errors[:start_date] << "Checkin date cannot be in the past."
    end
    else if self.end_date <= self.start_date
        self.errors[:start_date] << "Checkout date cannot precede checkin date."
    end
  end

  def has_vacancy? # change
    raise("Must have at least one guest!") if self.num_guests < 1
    if self.num_guests > self.room.beds_available(self.start_date, self.end_date)
      self.errors[:guest_capacity] << "Room full for one or more selected dates. Please re-do search."
    end
  end

  def ensure_unique_confirmation_code
    while Booking.exists?(:confirmation_code => self.confirmation_code)
      self.confirmation_code = Booking.generate_confirmation_code
    end
  end

  #ensure males cannot book female_only dorm room
  def females_only
    if(self.room_id == 2 && self.guest.gender != "Female(s) Only")
      self.errors[:room_id] << "Only females can book female dorm room."
    end
  end

end
