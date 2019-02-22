# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

room1 = Room.create(room_type: "MIXED", guest_capacity: 4)
room2 = Room.create(room_type: "FEMALE", guest_capacity: 4)


martha = Guest.create(name: "Martha Stewart", email: "martha@mail.com", booking_id: 1)
bob = Guest.create(name: "Bob Loblaw", email: "bob@mail.com", booking_id: 2)
john = Guest.create(name: "John Loblaw", email: "john@mail.com", booking_id: 3)
tommy = Guest.create(name: "Tommy W", email: "tommy@mail.com", booking_id: 4)
chris = Guest.create(name: "Chris R", email: "chris@mail.com", booking_id: 5)

mary = Guest.create(name: "Mary Stewart", email: "mary@mail.com", booking_id: 6)
bobberton = Guest.create(name: "Bobberton Loblaw", email: "bobberton@mail.com", booking_id: 7)
johnny = Guest.create(name: "Johnny Loblaw", email: "johnny@mail.com", booking_id: 8)
tom = Guest.create(name: "Tom W", email: "tom@mail.com", booking_id: 9)
christoph = Guest.create(name: "Christoph R", email: "christoph@mail.com", booking_id: 10)


booking1 = Booking.create(num_guests: 2, start_date: "Mar 1 2019", end_date: "Mar 2 2019",
            checkin_time: "07:00 PM", guest_id: 1, room_id: 1)
booking2 = Booking.create(num_guests: 2, start_date: "Mar 1 2019", end_date: "Mar 2 2019",
            checkin_time: "10:00 PM", guest_id: 2, room_id: 1)
booking3 = Booking.create(num_guests: 4, start_date: "Mar 1 2019", end_date: "Mar 2 2019",
            checkin_time: "08:00 PM", guest_id: 3, room_id: 2)
booking4 = Booking.create(num_guests: 2, start_date: "Mar 10 2019", end_date: "Mar 20 2019",
            checkin_time: "7:00 PM", guest_id: 4, room_id: 1)
booking5 = Booking.create(num_guests: 2, start_date: "Mar 10 2019", end_date: "Mar 14 2019",
            checkin_time: "02:00 PM", guest_id: 5, room_id: 1)
booking6 = Booking.create(num_guests: 1, start_date: "Mar 10 2019", end_date: "Mar 30 2019",
            checkin_time: "08:00 AM", guest_id: 6, room_id: 2)

booking7 = Booking.create(num_guests: 3, start_date: "Mar 10 2019", end_date: "Mar 14 2019",
            checkin_time: "10:00 PM", guest_id: 7, room_id: 2)

price1 = Price.create(start_date: "Mar 1 2019", end_date: "Mar 30 2019", room_id: 1)
price2 = Price.create(start_date: "Mar 1 2019", end_date: "Mar 30 2019", room_id: 2)



# create_table "bookings", force: :cascade do |t|
#   t.integer "num_guests", null: false
#   t.date "start_date", null: false
#   t.date "end_date", null: false
#   t.time "checkin_time"
#   t.integer "guest_id", null: false
#   t.integer "room_id", null: false
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end
#
# create_table "guests", force: :cascade do |t|
#   t.string "name", null: false
#   t.string "email", null: false
#   t.integer "booking_id", null: false
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end
#
# create_table "prices", force: :cascade do |t|
#   t.date "start_date", null: false
#   t.date "end_date", null: false
#   t.integer "price", null: false
# end
#
# create_table "rooms", force: :cascade do |t|
#   t.string "room_type", null: false
#   t.integer "guest_capacity", default: 4, null: false
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end
