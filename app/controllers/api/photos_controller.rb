class Api::PhotosController < ApplicationController
  def show
    @photo = Photo.with_attached_photos.first
    render :show
  end
end
