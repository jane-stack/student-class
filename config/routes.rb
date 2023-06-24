Rails.application.routes.draw do

  resources :students do
    resources :registers, only: [:create]
  end
  resources :courses do
    resources :registers, only: [:create]
  end
  resources :registers, only: [:destroy]

  # Students
  post '/signup', to: 'students#create'
  get '/me', to: 'students#show'

  # Sessions
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Registers
  get '/courses/:id/add_student', to: 'registers#add_student', as: 'add_student'
  post '/courses/:id/add_student', to: 'registers#create', as: 'create_registration'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
