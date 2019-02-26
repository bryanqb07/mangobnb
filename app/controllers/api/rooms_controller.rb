class Api::RoomsController < ApplicationController
  def index
    start_date = room_params[:start_date]
    end_date = room_params[:end_date]
    @rooms = Room.all
    @rooms.each{ |room| room.open_beds = room.beds_available(start_date, end_date) }
    render :index
  end

  def show
    @room = Room.find_by(id: params[:id])
    render :show
  end

  private
  def room_params
    self.params.require(:dates).permit(:start_date, :end_date)
  end
end
