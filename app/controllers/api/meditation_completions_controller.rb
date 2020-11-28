class Api::MeditationCompletionsController < ApplicationController

  def index
    @meditation_completions = MeditationCompletion.where(user_id: current_user.id)

    render :index
  end

  def show
    @meditation_completion = MeditationCompletion.find(params[:id])

    render :show
  end

  def create
    @user_pack = UserPack.find(params[:userPackId])
    @meditation = Meditation.find(params[:meditationId])

    
    @meditation_completion = MeditationCompletion.new(
        med_id: @meditation.id, 
        user_pack_id: @user_pack.id
      )

    if @meditation_completion.save
      render json: @meditation_completion
    else
      render json: meditation_completion.errors.full_messages, status: 422
    end
  end


  def meditation_completion_params
    params.require(:meditation_completion).permit(:user_id, :user_pack_id)
  end

  
end