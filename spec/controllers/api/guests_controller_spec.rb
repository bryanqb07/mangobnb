require 'rails_helper'
# begin
#   Api::GuestsController
# rescue
#   Api::GuestsController = nil
# end

RSpec.describe Api::GuestsController, type: :controller do
  describe "GET #show" do
    it "renders the show template" do
      test_guest = FactoryBot.create(:guest)
      get 'show', params: { id: test_guest.id }, format: :json
      expect(response).to render_template('api/guests/show')
    end

    context 'if the guest does not exist' do
      it 'is not a success' do
        begin
          get "show", params: { id: -1 }, format: :json
        rescue
          ActiveRecord::RecordNotFound
        end
        expect(response).not_to render_template('api/guests/show')
        expect(response).to have_http_status(422)
      end
    end
  end

  describe "POST #create" do
    context "with invalid params" do
      it "does not render the show template" do
        post 'create', params: { guest: { name: 'Jeanie' } }, format: :json
        expect(response).not_to render_template('api/guests/show')
      end
    end

    context "with valid params" do
      it "goes to guest show page on success" do
        post 'create', params: { guest: { name: 'Joseph', email: 'j@mail.com', gender: "Male" } }, format: :json
        expect(response).to render_template('api/guests/show')
      end
    end
  end
end
