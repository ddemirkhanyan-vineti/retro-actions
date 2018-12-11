class Retro::Create < Trailblazer::Operation
  step Model(Retro, :new)
  step Contract::Build(constant: Milestone::Contract::Create)
  step Contract::Validate()
  step Contract::Persist()
  step :assign_items

  def assign_items(options, *)
    options[:params][:items].each do |item|
      ActionItem::Create.(params: {
        retro: options[:model],
        description: item[:description]
      })
    end
  end
end
