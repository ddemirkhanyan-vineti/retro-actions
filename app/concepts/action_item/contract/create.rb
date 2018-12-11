module Retro::Contract
  class Create < Reform::Form
    property :retro_id
    property :description

    validation do
      required(:retro_id).filled
      required(:description).filled
    end
  end
end