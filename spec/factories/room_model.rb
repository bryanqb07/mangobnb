# create_table "rooms", force: :cascade do |t|
#   t.string "room_type", null: false
#   t.integer "guest_capacity", default: 4, null: false
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
#   t.string "title"
#   t.string "description"
#   t.integer "open_beds"
# end

FactoryBot.define do
  factory :room do
    room_type { "MIXED" }
    guest_capacity { 10 }
    title  { "female room" }
    description { "blah" }
  end
end
