class Api::BookingsController < ApplicationController
  def index
    @bookings = Booking.all
    render :index
  end

  def show
    @booking = Booking.find_by(id: params[:id])
    render :show
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.confirmation_code = Booking.generate_confirmation_code
    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  private

  def booking_params
    self.params.require(:booking).permit(:start_date, :end_date, :num_guests,
    :room_id, :guest_id, :comments, :checkin_time)
  end



end
