class ChangeFieldsInTable < ActiveRecord::Migration[5.1]
  def change
    add_column :action_items, :description, :string
    remove_column :action_items, :url
  end
end
