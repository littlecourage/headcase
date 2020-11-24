class Api::UserPacksController < ApplicationController 

  def index
    @user_packs = UserPack.where(user_id: current_user.id).includes(:pack)
     
    render :index
  end

  def show
    @user_pack = UserPack.find(params[:id])
  end

  def user_pack_params
    params.require(:user_pack).permit(:pack_id, :user_id)
  end

end