require 'rails_helper'

RSpec.describe Api::SessionsController, type: :controller do
  describe "POST #create" do
    context "with invalid params" do
      it "does not render the show template" do
        post 'create', params: { user: { username: 'p123'} }, format: :json
        expect(response).not_to render_template('api/users/show')
        expect(response).to have_http_status(422)
      end
    end

    context "with valid params" do
      it "goes to user show page on success" do
        test_user = User.create(username: "plato123", password: "socrates123",
        email: "plato@mail.com")
        post 'create', params: {user: {username: "plato123", password: "socrates123"}}, format: :json
        expect(response).to have_http_status(200)
        expect(response).to render_template('api/users/show')
      end
    end
  end

  describe "POST #destroy" do
    context "current user is nil" do
      it "does not logout a user" do
        post 'create', params: { user: { username: 'p123'} }, format: :json
        expect(response).not_to render_template('api/users/show')
        expect(response).to have_http_status(422)
      end
    end

    context "with valid params" do
      it "goes to user show page on success" do
        test_user = User.create(username: "plato123", password: "socrates123",
        email: "plato@mail.com")
        post 'create', params: {user: {username: "plato123", password: "socrates123"}}, format: :json
        post 'destroy', format: :json
        expect(response[:current_user]).to be_nil
      end
    end
  end
end
