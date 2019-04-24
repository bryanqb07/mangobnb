class Api::GuestsController < ApplicationController

  def show
    @guest = Guest.find_by(id: params[:id])
    render :show
  end

  def create
    @guest = Guest.new(guest_params)
    if @guest.save
      render :show
    else
      render json: @guest.errors.full_messages, status: 422
    end
  end

  private

  def guest_params
    self.params.require(:guest).permit(:name, :email, :gender, :confirmation_email)
  end

end
