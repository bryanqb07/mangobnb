class Api::UsersController < ApplicationController
  def show
    render :show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(user)
      render :show
    else
        render json: @user.errors.full_messages, status: 422
    end
  end

  protected

  def user_params
    self.params.require(:user).permit(:username, :password, :email)
  end

end
