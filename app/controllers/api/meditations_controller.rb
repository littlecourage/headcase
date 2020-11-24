class Api::MeditationsController < ApplicationController 

  def index
    @meditations = Meditation.where(pack_id: pack.id)

    render :index
  end

  def show
    @meditation = Meditation.find(params[:id])
    render :show
  end

  


end
