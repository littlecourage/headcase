class Api::PacksController < ApplicationController

  def index

    @packs = Pack.all.with_attached_thumbnail
     
    render :index
  end

  def show 
    @pack = Pack.with_attached_thumbnail.find(params[:id])

    render :show
  end


  def pack_params
    params.require(:pack).permit(:title, :category_id, :thumbnail)
  end

end