class Api::PricesController < ApplicationController
    def index
      start_date = price_params[:start_date]
      end_date = price_params[:end_date]
      @prices = Price.where(price_date: [start_date..end_date])
      render :index
    end

    private
    def price_params
      self.params.require(:dates).permit(:start_date, :end_date)
    end


end
