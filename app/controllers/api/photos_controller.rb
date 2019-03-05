class Api::PhotosController < ApplicationController
  def show
    @photo = Photo.first
    render :show
  end
end
