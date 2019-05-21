class Room < ApplicationRecord
  validates :room_type, :guest_capacity, presence: true
  has_many :bookings
  has_many :guests, through: :bookings
  has_many :prices

  def vacancies_by_day(start_date, end_date)
    bookings = self.bookings.where(["start_date >= ? and end_date <= ?", start_date, end_date])
    return if bookings.empty?
    vacancy_count = Hash.new(self.guest_capacity)
    bookings.each do | booking |
      (booking.start_date...booking.end_date).each do |date| # doesn't include checkout date bc guest not staying
        vacancy_count[date] -= booking.num_guests # get amount of guests per room
      end
    end
    vacancy_count
  end

  def beds_available(start_date, end_date)
    bookings_hash = vacancies_by_day(start_date, end_date)
    max_beds_available(bookings_hash)
  end

  def max_beds_available(bookings_hash)
    return self.guest_capacity if bookings_hash.nil? || bookings_hash.empty?
    min_vacancies = bookings_hash.min_by{|k, v| v }[1]
    min_vacancies >= 0 ? min_vacancies : 0
  end

  def price_per_guest(start_date, end_date)
    price_per_guest = 0
    prices = Price.where(["(price_date between ? and ? ) and room_id = ?" ,
      start_date, end_date, self.id])
    prices.to_a.each { |price| price_per_guest += price[:price] }
    price_per_guest
  end

end
