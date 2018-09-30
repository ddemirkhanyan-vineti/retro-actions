class UsersController < ApplicationController
  protect_from_forgery with: :exception

  def index
    users = User.all
    render json: users, each_serializer: UserListSerializer
  end

  def show
    users = User.find(params[:id])
    render json: users
  end

end
