require 'rails_helper'

# t.date "price_date", null: false
# t.integer "price", null: false
# t.integer "room_id"

# Things to test:
# Validations
# Associations
# Class Methods


RSpec.describe Price, type: :model do

  subject(:price) { FactoryBot.build(:price) }

  describe "validations" do
    it { should validate_presence_of(:price_date) }
    it { should validate_presence_of(:price) }
  end


  describe "associations" do
    it { should belong_to(:room) }
    # it { should have_many(:guests).through(:bookings)}
  end

end
