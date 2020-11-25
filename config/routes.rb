Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :packs, only: [:index, :show]
    resources :categories, only: [:index, :show]
    resources :user_packs, only: [:index, :show]
    resources :meditations, only: [:index, :show]
    resources :meditation_completions, only: [:index, :create, :show]
  end

  root "static_pages#root"
end