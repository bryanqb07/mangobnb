class BookingMailer < ApplicationMailer

  def confirmation_email(booking)
    @booking = booking
    mail(to: @booking.guest.email, subject: 'Booking Confirmed')
  end

end
