class Room < ApplicationRecord
  validates :room_type, :guest_capacity, presence: true
  has_many :bookings
  has_many :guests, through: :bookings
  has_many :prices
  has_many_attached :photos

  def max_guests(bookings)
    guest_count = Hash.new(0)
    bookings.each do | booking |
      (booking.start_date...booking.end_date).each do |date| # doesn't include checkout date bc guest not staying
        guest_count[date] += booking.num_guests
      end
    end
    guest_count.max_by{|k, v| v }[1] #returns the max number of guests per one day , return array [k,v]
  end

  def beds_available(start_date, end_date)
      #debugger
      bookings = self.bookings.where(["start_date >= ? and end_date <= ?", start_date, end_date])
      return self.guest_capacity if bookings.empty?
      existing_guests_max = self.max_guests(bookings)
      self.guest_capacity - existing_guests_max >= 0 ? self.guest_capacity - existing_guests_max : 0
  end

  def price_per_guest(start_date, end_date)
    price_per_guest = 0
    prices = Price.where(["(price_date between ? and ? ) and room_id = ?" ,
      start_date, end_date, self.id])
    prices.each{ |price| total_price += price.price }
    price_per_guest
  end

end
