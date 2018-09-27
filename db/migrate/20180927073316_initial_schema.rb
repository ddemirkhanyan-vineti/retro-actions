class InitialSchema < ActiveRecord::Migration[5.1]
  def change
    create_table :users do  |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.datetime :created_at
      t.datetime :updated_at
      t.index ["email"], name: "index_email_on_users", unique: true, using: :btree
    end

    create_table :retros do  |t|
      t.string :name

      t.datetime :date
      t.datetime :created_at
      t.datetime :updated_at
      t.belongs_to :user, index: true
    end

    create_table :attachments do  |t|
      t.string :url
      t.integer :retro_id
      t.datetime :created_at
      t.datetime :updated_at
    end

    create_table :action_items do  |t|
      t.string :url
      t.integer :retro_id
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
