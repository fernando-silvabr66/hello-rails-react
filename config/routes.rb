Rails.application.routes.draw do
  # get 'root/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # root 'root#index'

  namespace :api, defaults: { format: 'json' } do
    get 'message', to: 'greetings#random'
  end

  root 'root#index'
  get 'root/index'
  get 'greetings/random'
end
