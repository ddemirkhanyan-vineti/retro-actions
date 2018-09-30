class RetroListSerializer < ActiveModel::Serializer

  attributes :id, :name, :date , :total_action_items, :complete_action_items

  def total_action_items
    object.action_item.count
  end

  def complete_action_items
    object.action_item.select {|item| ap item; ap item.status; item.status == 'complete'}.count
  end
end
