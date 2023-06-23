Rails.application.routes.draw do

  resources :courses
  resources :students, only: [:index] do
    resources :registers, only: [:index, :create]
  end

  # Students
  post '/signup', to: 'students#create'
  get '/me', to: 'students#show'

  # Sessions
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
