json.partial! "api/bookings/booking.json.jbuilder", booking: @booking
json.guest do
  json.partial! "api/guests/guest.json.jbuilder", guest: @booking.guest
end
json.room do
  json.partial! "api/rooms/room.json.jbuilder", room: @booking.room
end
