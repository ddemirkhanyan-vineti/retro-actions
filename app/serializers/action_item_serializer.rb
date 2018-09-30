class ActionItemSerializer < ActiveModel::Serializer
  attributes :id, :status , :users

  def users
    object.user
  end
end
