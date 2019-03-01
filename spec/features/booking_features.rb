require 'rails_helper'

feature "booking features", type: :feature do
  feature "making a new booking" do
    before(:each) do
      visit '/bookings'
    end
    scenario "with valid params" do
      fill_in "name",
    end

    scenario "with invalid params" do
    end

  end
end
