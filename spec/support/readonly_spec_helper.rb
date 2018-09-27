shared_examples_for 'readonly model' do
  describe '#readonly' do
    subject { FactoryBot.create(described_class.name.demodulize.underscore) }

    it 'cannot be updated' do
      expect {
        subject.update_attributes(created_at: DateTime.current)
      }.to raise_error(ActiveRecord::ReadOnlyRecord)
    end

    it 'cannot be deleted' do
      expect {
        subject.destroy!
      }.to raise_error(ActiveRecord::ReadOnlyRecord)
    end
  end
end
