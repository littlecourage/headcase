class Api::CategoriesController < ApplicationController

  def index
    @categories = Category.all

    render :index
  end

  def show
    @category = Category.find(params[:id])

    render :show
  end

  def category_params 
    params.require(:category).permit(:name)
  end

end