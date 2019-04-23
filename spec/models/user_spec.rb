require 'rails_helper'

# attr_reader :password
# validates :username, :password_digest, :email, presence: true
# validates :username, :email, uniqueness: true
# validates :password_digest, presence: { message:  'Password can\'t be blank' }
# validates :password, length: { minimum: 6, allow_nil: true }
# after_initialize :ensure_session_token



# Things to test:
# Validations
# Associations
# Class Methods

RSpec.describe User, type: :model do

  subject(:test_user) { Room.find_by(id: 2) }

  describe "validations" do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:email) }
  end


  describe "class methods" do
    #
    describe "#max_guests" do
      it "should return max guests from specified number of bookings" do
        bookings = Booking.where(room_id: 1)
        expect(room1.max_guests(bookings)).to eq(4)
      end
    end

    describe "#beds_available" do
      it "should return an min number of beds for a given date range"
    end

    describe "#price_per_guest" do
      it "should return the total price / by total guests"
    end

  end
end
