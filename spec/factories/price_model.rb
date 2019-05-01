FactoryBot.define do
  factory :price do
    price_date { Faker::Date.between(Date.today, 1.month.from_now)}
    price { 4321 }
    room_id { 1 }
  end
end
