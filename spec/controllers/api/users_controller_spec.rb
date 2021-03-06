require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  describe "POST #create" do
    context "with invalid params" do
      it "does not render the show template" do
        post 'create', params: { user: { username: 'plato123'} }, format: :json
        expect(response).not_to render_template('api/users/show')
        expect(response).to have_http_status(422)
      end
    end

    context "with valid params" do
      it "goes to user show page on success" do
        post 'create', params: { user: { username: 'plato123',
          password: "socrates123", email: "plato@mail.com" } }, format: :json
        expect(response).to render_template('api/users/show')
      end
    end
  end
end
