class Retro < ApplicationRecord
  belongs_to :user, inverse_of: :retro
  has_one :attachment, inverse_of: :retro
  has_many :action_item, inverse_of: :retro
end
