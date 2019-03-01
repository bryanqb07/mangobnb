FactoryBot.define do
  factory :guest do
    name {Faker::Name.name}
    email {Faker::Internet.email}
    gender {Faker::Gender.binary_type}
  end
end
