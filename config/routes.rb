Rails.application.routes.draw do
  resources :lessons, only:[:index]
  resources :users, only:[:show, :create]
  resources :languages, only:[:index]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post "/login", to: "session#create"
  get "/auth", to: "users#show"
  delete "/logout", to: "session#destroy"

  # post "/signup", to: "users#create"

end
