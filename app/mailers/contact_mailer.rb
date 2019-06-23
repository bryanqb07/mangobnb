class ContactMailer < ApplicationMailer
  def contact_email(contact_form)
    @contact_form = contact_form
    mail(from: @contact_form.email, to: "bryan.privco@gmail.com", subject: 'BOOKING INQUIRY')
  end
end
