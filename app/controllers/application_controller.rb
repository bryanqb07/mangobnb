class ApplicationController < ActionController::Base
  helper_method :photo_holder

  def photo_holder
    Photo.first
  end
end
