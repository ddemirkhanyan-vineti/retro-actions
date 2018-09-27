require 'rails_helper'

describe Attachment, type: :model do
  describe 'associations' do
    describe 'belongs_to' do
      it {should belong_to(:retro).inverse_of('attachment')}
    end
  end

end

