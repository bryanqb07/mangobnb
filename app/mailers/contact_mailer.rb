class ContactMailer < ApplicationMailer
  def contact_email(contact_form)
    @contact_form = contact_form
    mail(from: @contact_form.email, to: "bml312@nyu.edu", subject: 'BOOKING INQUIRY')
  end
end
