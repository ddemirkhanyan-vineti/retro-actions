require 'rails_helper'

describe User, type: :model do
  describe 'associations' do
    describe 'has_many' do
      it {is_expected.to have_many(:retro).inverse_of('user')}
    end
  end

end

