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
    retro = Retro::Create.(params: params)
    render json: retro
  end
end
