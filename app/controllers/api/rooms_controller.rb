class Api::RoomsController < ApplicationController
  def index
    @rooms = Room.all
    render :index
  end

  def show
    @room = Room.with_attached_photos.find_by(id: params[:id])
    render :show
  end
end
