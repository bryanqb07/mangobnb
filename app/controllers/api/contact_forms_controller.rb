class Api::ContactFormsController < ApplicationController
    def create
      @contact_form = ContactForm.new(contact_form_params)
      if @contact_form.save
        msg = ContactMailer.contact_email(@contact_form)
        msg.deliver_now
        render json: {:status => "Successfully sent"}, status: 200
      else
        render json: @contact_form.errors.full_messages, status: 422
      end
    end


  private
  def contact_form_params
    self.params.require(:contact_form).permit(:name, :email, :message)
  end
end
