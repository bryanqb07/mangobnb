class Api::RestrictionsController < ApplicationController
  def create
    room_id = restriction_params[:room_id]
    #bulk edit restriction
    # debugger
    if restriction_params[:start_date] && restriction_params[:end_date]
      new_restrictions = Restriction.createRestrictions(restriction_params[:start_date], restriction_params[:end_date],
        restriction_params[:net_vacancies], room_id)
      if new_restrictions
        render json: new_restrictions
      else
        render json: {error: "processing error"}, status: 422
      end
    #create single restriction
    else
      # restriction_date = restriction_params[:restriction_date]
      # restriction = Restriction.find_by(restriction_date: restriction_date, room_id: room_id)
      # # restriction.destroy if restriction
      @restriction = Restriction.new(restriction_params)
      if @restriction.save
        render :show
      else
        render json: @restriction.errors.full_messages, status: 422
      end
    end
  end
end


# private
def restriction_params
  self.params.require(:restriction).permit(:restriction_date, :room_id, :net_vacancies, :start_date, :end_date)
end
