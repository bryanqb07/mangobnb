require 'rails_helper'

# Things to test:
# Validations
# Associations
# Class Methods


RSpec.describe Guest, type: :model do

  subject(:guest) { FactoryBot.build(:guest) }

  describe "validations" do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:gender) }

  end

  describe "associations" do
    it { should have_many(:bookings)}
    it { should have_one(:room).through(:bookings)}
  end

end


# describe "email_validations" do
#   context "with a valid email address" do
#       let(:email) { "valid@email.com" }
#       it { should be_valid }
#   end
#
#   context "with an invalid email address" do
#       let(:email) { "invalid.email.com" }
#       it { expect(guest.email).to_not be_valid }
#   end
