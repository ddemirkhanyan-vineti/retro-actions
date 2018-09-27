class Attachment < ApplicationRecord
  belongs_to :retro, inverse_of: :attachment
end
