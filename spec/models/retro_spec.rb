require 'rails_helper'

describe Retro, type: :model do
  describe 'associations' do
    describe 'belongs_to' do
      it {should belong_to(:user).inverse_of('retro')}

    end
    describe 'has_one' do
      it {should have_one(:attachment).inverse_of('retro')}
    end

    describe 'has_many' do
      it {should have_many(:action_item).inverse_of('retro')}
    end
  end

end

