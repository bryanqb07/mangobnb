class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user.nil?
      render json: "Credentials were wrong."
    else
      login!(@user)
      render 'api/users/show'
    end
  end

  def destroy
    if current_user.nil?
      render json: "Not logged in.", status: 404
    else
      logout!
      render json: {}
    end
  end
end
