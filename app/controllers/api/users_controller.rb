class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])

    render :show
  end

  def create
    @user = User.new(user_params)

    if @user.save
      @user.ensure_user_packs
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :password)
  end
end
