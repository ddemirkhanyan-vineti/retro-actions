require 'rails_helper'

describe ActionItem, type: :model do
  describe 'associations' do
    describe 'belongs_to' do
      it {should belong_to(:retro).inverse_of('action_item')}
    end
    describe 'has_and_belongs_to_many'
      it {should have_and_belong_to_many(:user)}
  end

end

