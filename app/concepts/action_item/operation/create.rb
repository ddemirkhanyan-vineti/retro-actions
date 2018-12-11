class ActionItem::Create < Trailblazer::Operation
  step Model(ActionItem, :new)
  step :assign_schedule
  step Contract::Build(constant: Milestone::Contract::Create)
  step Contract::Validate()
  step Contract::Persist()

  def assign_schedule(options, *)
    options[:model].retro_id = options[:params][:retro][:id]
  end
end
