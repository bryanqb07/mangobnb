require 'rails_helper'

RSpec.describe User, type: :model do

  subject(:user) { FactoryBot.build(:user) }

  describe "validations" do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:email) }
  end


  describe "class methods" do
    describe "#reset_session_token" do
        it "should reset a user's session token" do
          old_session_token = user.session_token
          user.reset_session_token!
          expect(user.session_token).to_not eq(old_session_token)
        end
    end
  end

  describe "model methods" do
    describe "::find_by_credentials" do
      context "user exists" do
        it "should return a user based on criteria" do
          test_user = FactoryBot.create(:user)
          expect(User.find_by_credentials(test_user.username, test_user.password)).to eq(test_user)
        end
      end
      context "user doesn't exist" do
        it "should not return anything" do
          expect(User.find_by_credentials("bobobob", "password123")).to be_nil
        end
      end
    end
  end
end
