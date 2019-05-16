class Api::RoomsController < ApplicationController
  def index
    start_date = room_params[:start_date]
    end_date = room_params[:end_date]
    @rooms = Room.all
    @rooms.each do |room|
      # debugger
      vacancies = room.vacancies_by_day(start_date, end_date)
      room.vacancies = vacancies
      # room.vacancies = vacancies
      room.open_beds = room.max_beds_available(vacancies)
    end

    render :index
  end

  def show
    @room = Room.find_by(id: params[:id])
    if @room
      render :show
    else
      render json: "Invalid room id", status: 422
    end
  end

  private
  def room_params
    self.params.require(:dates).permit(:start_date, :end_date)
  end
end
