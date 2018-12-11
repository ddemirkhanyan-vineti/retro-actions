module Retro::Contract
  class Create < Reform::Form
    property :name
    property :user_id

    validation do
      required(:name).filled
      required(:user_id).filled
    end
  end
end