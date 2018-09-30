class UserSerializer < ActiveModel::Serializer
  attributes  :id, :first_name, :last_name, :email, :action_items

  def action_items
    object.action_item
  end
end
