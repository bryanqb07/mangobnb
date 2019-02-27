@bookings.each do |booking|
  json.set! booking.id do
    json.partial! "api/bookings/booking.json.jbuilder", booking: booking
  end
end
