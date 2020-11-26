class Api::MeditationsController < ApplicationController 

  def index
    @meditations = Meditation.with_attached_track.where(pack_id: pack.id)

    render :index
  end

  def show
    @meditation = Meditation.with_attached_track.find(params[:id])
    render :show
  end

end
