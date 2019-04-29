require 'rails_helper'

begin
  Api::BookingsController
rescue
  Api::BookingsController = nil
end

RSpec.describe Api::BookingsController, :type => :controller do
  describe "GET #index" do
    it "renders the bookings index" do
      get 'index', { format: :json }
      expect(response).to have_http_status(200)
      expect(response).to render_template('api/bookings/index')
    end
  end
  describe "GET #show" do
    it "renders the show template" do
      test_room = FactoryBot.create(:room)
      test_guest = FactoryBot.create(:guest)
      test_booking = Booking.create(start_date: "Apr 30 2019", end_date: "May 01 2019",
        num_guests: 1, room_id: test_room.id, guest_id: test_guest.id, comments: "blah", checkin_time: "12:00:PM")

      get 'show', params: { id: test_booking.id }, format: :json
      expect(response).to render_template('api/bookings/show')
    end

    context 'if the booking does not exist' do
      it 'is not a success' do
        begin
          get "show", params: { id: -1 }, format: :json
        rescue
          ActiveRecord::RecordNotFound
        end
        expect(response).not_to render_template('api/bookings/show')
        expect(response).to have_http_status(422)
      end
    end
  end
end
