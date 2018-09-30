class ActionItemSerializer < ActiveModel::Serializer
  attributes :id, :status , :users, :description

  def users
    object.user
  end
end
