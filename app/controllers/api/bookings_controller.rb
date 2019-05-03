class Api::BookingsController < ApplicationController
  def index
    if params[:start_date] && params[:end_date]
      @bookings = Booking.where(["start_date >= ? and end_date <= ?", params[:start_date], params[:end_date]])
    end
    render :index
  end

  def show
    @booking = Booking.find_by(id: params[:id])
    if @booking
      render :show
    else
      render json: "Invalid guest id", status: 422
    end
  end

  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      msg = BookingMailer.confirmation_email(@booking)
      msg.deliver_now
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find_by(id: params[:id])
    if @booking.nil?
      render json: "Booking doesn't exist.", status: 404
    else
      @booking.destroy!
      render json: {}
    end
  end


  private

  def booking_params
    self.params.require(:booking).permit(:start_date, :end_date, :num_guests,
    :room_id, :guest_id, :comments, :checkin_time)
  end

end
