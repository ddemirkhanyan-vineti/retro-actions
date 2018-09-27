shared_context 'apheresis procedures controller' do
  let(:institution) { FactoryBot.create(:institution) }
  let(:user) { FactoryBot.create(:user) }
  let!(:qualification) { FactoryBot.create(:qualification, user: user, institution: institution) }
  let(:verifier_user) { FactoryBot.create(:user) }
  let!(:apheresis_procedures) { FactoryBot.create_list(:apheresis_procedure, 2, institution: institution, patient_confirm_aph_date: Date.new) }
  let(:accessed_item) { apheresis_procedure }
  let!(:other_apheresis_procedures) { FactoryBot.create_list(:apheresis_procedure, 2) }

  before(:each) do
    verifier_user.qualify(institution.id, :cell_pharmacist)
  end
end

def expect_signatures_present(response)
  parsed_body = JSON.parse(response.body)
  expect(parsed_body['apheresisProcedure']['identitySignatureDocument']).to be_present
  expect(parsed_body['apheresisProcedure']['identitySignatureDocument']['approverSignature']).to be_present
end
