class UsersController < ApplicationController

  def index
    users = User.all
    render json: users, each_serializer: UserListSerializer
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def create
    user = User.create!(user_create_params)
    render json: user
  end

  def user_create_params
    params.require(%i[first_name last_name email])
    params.permit(:first_name, :last_name, :email)
  end

end
