Rails.application.routes.draw do
  resources :terms, only: [:index]
  resources :lessons, only:[:index, :create, :destroy]
  resources :users, only:[:show, :create]
  resources :languages, only:[:index, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post "/login", to: "session#create"
  get "/auth", to: "users#show"
  delete "/logout", to: "session#destroy"

end
