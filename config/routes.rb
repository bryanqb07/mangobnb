Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, :defaults => {:format => 'json'} do
    resources :rooms, only: [:index, :show]
    resources :guests, only: [:create]
    resources :bookings, only: [:index, :create, :show]
  end

  root to: 'static_pages#root'

end
