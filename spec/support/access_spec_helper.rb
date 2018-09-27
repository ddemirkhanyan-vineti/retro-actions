shared_examples_for 'access tracked' do
  describe 'access record' do
    let(:access) do
      {
        event_details: {
          'user_uid' => user.uid,
          'item_id' => accessed_item.id.to_s,
          'item_type' => accessed_item.class.name
        }
      }
    end

    it 'creates an access record' do
      expect { subject }.to change { Event::Access.count }.from(0).to(1)
    end

    it 'creates an access record with user and item data' do
      subject
      expect(Event::Access.first).to have_attributes(access)
    end
  end
end
