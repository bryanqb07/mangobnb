Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, :defaults => {:format => 'json'} do
    resources :rooms, only: [:index, :show]
    resources :guests, only: [:create, :show]
    resources :bookings, only: [:index, :create, :show, :destroy]
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :restrictions, only: [:create]
    resources :prices, only: [:index, :create]
    resources :photos, only: [:show]
  end

  root to: 'static_pages#root'

end
