FactoryBot.define do
  factory :retro do
    name {Faker::Name.first_name}
    date {DateTime.now}
    user {FactoryBot.build(:user)}
  end

end
