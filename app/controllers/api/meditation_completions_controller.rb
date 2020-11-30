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

    @meditation_completion = MeditationCompletion
      .where(med_id: @meditation.id, user_pack_id: @user_pack.id)
      .first_or_initialize

    if @meditation_completion.save
      debugger
      @user_pack.increment_current_med_no!
      render json: @meditation_completion
    else
      render json: meditation_completion.errors.full_messages, status: 422
    end
  end


  def meditation_completion_params
    params.require(:meditation_completion).permit(:user_id, :user_pack_id)
  end

  
end