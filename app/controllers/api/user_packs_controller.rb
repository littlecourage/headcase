class Api::UserPacksController < ApplicationController 

  def index
    @user_packs = UserPack.where(user_id: current_user.id).includes(:pack, :meditations)

    render :index
  end

  def show
    @user_pack = UserPack.find(params[:id])
    render :show
  end

  def create
    @pack = Pack.find(params[:userPack][:packId])
    @user = current_user

    @user_pack = UserPack.new(user_id: @current_user.id, pack_id: @pack.id)
    if @user_pack.save
      render :show
    else
      render json: @user_pack.errors.full_messages, status: 422
    end
  end

  def destroy
    @user_pack = UserPack.find(params[:id])

    if @user_pack.destroy
      render :show
    else
      render json: @user_pack.errors.full_messages, status: 422
    end
  end

  def user_pack_params
    params.require(:userPack).permit(:packId, :userId)
  end

end