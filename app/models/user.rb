class User < ApplicationRecord
  has_many :retro, inverse_of: :user
  has_and_belongs_to_many :action_item
end
