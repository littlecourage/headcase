class Api::PacksController < ApplicationController

  def index 
    @packs = Pack.all

    render :index
  end

  def show 
    @pack = Pack.find(params[:id])
    render :show
  end


  def pack_params
    params.require(:pack).permit(:title, :category)
  end

end