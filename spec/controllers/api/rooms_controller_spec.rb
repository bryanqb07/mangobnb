require 'rails_helper'
# begin
#   Api::GuestsController
# rescue
#   Api::GuestsController = nil
# end

RSpec.describe Api::RoomsController, type: :controller do

  describe "GET #index" do
    it "renders the rooms index" do
      get 'index', params: { dates: {start_date: "Apr 20 2019", end_date: "Apr 25 2019"} }, format: :json
      expect(response).to have_http_status(200)
      expect(response).to render_template('api/rooms/index')
    end
  end

  describe "GET #show" do
    it "renders the show template" do
      test_room = FactoryBot.create(:room)
      get 'show', params: { id: test_room.id }, format: :json
      expect(response).to render_template('api/rooms/show')
    end

    context 'if the room does not exist' do
      it 'is not a success' do
        begin
          get 'show', params: { id: -1 }, format: :json
        rescue
          ActiveRecord::RecordNotFound
        end
        expect(response).not_to render_template('api/rooms/show')
        expect(response).to have_http_status(422)
      end
    end
  end
end
