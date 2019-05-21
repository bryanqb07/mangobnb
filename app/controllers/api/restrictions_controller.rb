class Api::RestrictionsController < ApplicationController
  def create
    room_id = restriction_params[:room_id]
    #bulk edit restriction
    # debugger
    if price_params[:start_date] && price_params[:end_date]
      new_prices = Price.createPrices(price_params[:start_date], price_params[:end_date],
        price_params[:price], room_id)
      if new_prices
        render json: new_prices
      else
        render json: "error"
      end
    #create single restriction
    else
      price_date = price_params[:price_date]
      price = Price.find_by(price_date: price_date, room_id: room_id)
      price.destroy if price
      @price = Price.new(price_params)
      if @price.save
        render :show
      else
        render json: @price.errors.full_messages, status: 422
      end
    end
  end
end


# private
def price_params
  self.params.permit(:restriction_date, :room_id, :net_vacancies, :start_date, :end_date)
end
