class SubscriberMailer < ApplicationMailer
  def welcome_email(subscriber)
      @subscriber = subscriber
      mail(to: @subscriber, subject: 'Thank you for joining MangoBnb mailing list')
  end
end
