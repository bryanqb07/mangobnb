# t.integer "num_guests", null: false
# t.date "start_date", null: false
# t.date "end_date", null: false
# t.string "checkin_time"
# t.integer "guest_id", null: false
# t.integer "room_id", null: false
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
# t.text "comments"
# t.string "confirmation_code"
# t.integer "price_at_booking_time"
# t.integer "room1_beds"
# t.integer "room2_beds"

class CreateBookingsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :num_guests, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.string :checkin_time
      t.text :comments
      t.integer :guest_id, null: false
      t.integer :room_id, null: false
      t.string :confirmation_code, null: false
      t.integer :price_at_booking_time, null: false
      t.timestamps
    end
  end
end
