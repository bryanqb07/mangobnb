class BookingMailer < ApplicationMailer
  default from: 'admin@mangostation.com'

  def confirmation_email(booking)
    @booking = booking
    mail(to: @booking.guest.email, subject: 'Booking Confirmed')
  end

end
