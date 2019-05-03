require 'rails_helper'

RSpec.describe Api::PricesController, :type => :controller do
  describe "GET #index" do
    it "renders the rooms index" do
      get 'index', params: { dates: {start_date: "Apr 20 2019", end_date: "Apr 25 2019"} }, format: :json
      expect(response).to have_http_status(200)
      expect(response).to render_template('api/prices/index')
    end
  end
end
