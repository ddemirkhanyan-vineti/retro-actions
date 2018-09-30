require 'rails_helper'

describe RetrosController, type: :controller do
  describe 'GET /retros' do
    describe 'when logged in' do
      let!(:user) {FactoryBot.create(:user)}
      let!(:retros){FactoryBot.create_list(:retro,2)}

      it 'returns successfully' do
        get :index
        expect(response.status).to eq 200
      end

      it 'returns list of retros' do
        get :index
        body = JSON.parse(response.body)
        ap response.body
        expect(body.length).to eq 2

      end
    end
  end
end
