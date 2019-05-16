class Api::PricesController < ApplicationController
    def index
      start_date = params[:dates][:start_date]
      end_date = params[:dates][:end_date]
      @prices = Price.where(price_date: [start_date...end_date])
      render :index
    end

    def create
      start_date = price_params[:price_date]
      price = Price.find_by(price_date: start_date)
      price.destroy if price
      @price = Price.new(price_params)
      if @price.save
        render :show
      else
        render json: @price.errors.full_messages, status: 422
      end
    end

    # private
    def price_params
      self.params.require(:price).permit(:price_date, :price, :room_id)
    end

end
