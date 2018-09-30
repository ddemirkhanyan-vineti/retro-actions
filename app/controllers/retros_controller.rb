class RetrosController < ApplicationController

  def index
    retros = Retro.all
    render json: retros , each_serializer: RetroListSerializer
  end

  def show
    retro = Retro.find(params[:id])
    render json: retro
  end

  def create
    retro = Retro.create!(retro_create_params)
    params[:items].each{|item|
      action_item = retro.action_item.create(action_item_params(item))
      item[:user_ids].each{ |user|
        action_item.user << User.find(user)
      }

    }
    render json: retro
  end
  def action_item_params(item)
    item.require(%i[description])
    item.permit(:description)
  end
  def retro_create_params
    params.require(%i[name user_id])
    params.permit(:name, :user_id)
  end
end
