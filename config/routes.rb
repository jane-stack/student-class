Rails.application.routes.draw do

  # resources :students do
  #   resources :registers, only: [:create]
  # end
  # resources :courses do
  #   resources :registers, only: [:create]
  # end
  # resources :registers, only: [:destroy]

  resources :students do
    resources :registers, only: [:destroy]
  end
  resources :courses, only: [:index, :create, :destroy]
  resources :registers, only: [:index, :create]

  # Students
  post '/signup', to: 'students#create'
  get '/user', to: 'students#user'

  # Sessions
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
