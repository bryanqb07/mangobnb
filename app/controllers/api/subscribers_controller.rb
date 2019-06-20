class Api::SubscribersController < ApplicationController
  # def index
  #   # used to handle contact forms
  #
  # end

  def create
    @subscriber = Subscriber.new(subscriber_params)
    if @subscriber.save
      msg = SubscriberMailer.welcome_email(@subscriber)
      msg.deliver_now
      render json: {:status => "Successfully saved"}, status: 200
    else
      render json: @subscriber.errors.full_messages, status: 422
    end
  end

  def destroy
    @subscriber = Subscriber.find_by(id: params[:id])
    if @subscriber.nil?
      render json: "Subscriber doesn't exist.", status: 404
    else
      @subscriber.destroy!
      render json: {:status => "Sucessfully deleted"}
    end
  end

  private
  def subscriber_params
    self.params.require(:subscriber).permit(:email)
  end
end
