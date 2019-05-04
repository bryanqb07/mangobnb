class Api::BookingsController < ApplicationController
  def index
    if params[:confirmation_code].length > 0
      @bookings = [Booking.find_by(confirmation_code: params[:confirmation_code])]
    else
      bookings = Booking.where(["start_date >= ? and end_date <= ?", params[:start_date], params[:end_date]])
      @bookings = bookings.includes(:guest, :room)
    end

    if @bookings
      render :index
    else
      render json: {}
    end
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
