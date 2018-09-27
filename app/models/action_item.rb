class ActionItem < ApplicationRecord
  belongs_to :retro, inverse_of: :action_item
  has_and_belongs_to_many :user
end
