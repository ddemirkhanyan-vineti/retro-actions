FactoryBot.define do
  factory :user do
    transient do
      qualified_for_therapy 'lenti_globin'
    end

    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    password { generate_faker_password }

  end

  sequence(:email) { |i| "email#{i}@example.com" }
end
