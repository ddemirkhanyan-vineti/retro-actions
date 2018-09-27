class CreateJoinTableActionItemUsers < ActiveRecord::Migration[5.1]
  def change
    create_join_table :action_items, :users do |t|
      # t.index [:action_item_id, :user_id]
      # t.index [:user_id, :action_item_id]
    end
  end
end
