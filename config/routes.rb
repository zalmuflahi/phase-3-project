Rails.application.routes.draw do
   get '/mobs', to: 'mobs#index'
   get '/mobs/:id', to:'mobs#show'
   get '/users', to: 'users#index'
   get '/users/:id', to:'users#show'
   get '/weapons', to: 'weapons#index'
   get '/weapons/:id', to:'weapons#show'
   get '/characters', to: 'characters#index'
   get '/characters/:id', to:'characters#show'
   patch '/users/:id', to:'users#update'
end