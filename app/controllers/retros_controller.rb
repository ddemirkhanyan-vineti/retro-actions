class RetrosController < ApplicationController
  protect_from_forgery with: :exception

  def index
    retros = Retro.all
    render json: retros , each_serializer: RetroListSerializer
  end

  def show
    retro = Retro.find(params[:id])
    render json: retro
  end
end
