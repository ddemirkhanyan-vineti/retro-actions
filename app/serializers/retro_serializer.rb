class RetroSerializer < ActiveModel::Serializer

  attributes :id, :name, :date
  has_many :action_item
end
