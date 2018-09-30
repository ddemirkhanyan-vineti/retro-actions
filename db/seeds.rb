# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
def create_user(name)
  User.create!({ first_name: name, last_name: name, email: "#{name}@old.friend" })
end

retro_master = create_user('master')

retro = Retro.create!({ name: 'Retro1', date: DateTime.now, user: retro_master })

user_1 = create_user('user_1')
user_2 = create_user('user_2')
user_3 = create_user('user_3')
user_4 = create_user('user_4')
user_5 = create_user('user_5')
user_6 = create_user('user_6')
user_7 = create_user('user_7')
user_8 = create_user('user_8')

users = User.all
10.times do |i|
  ActionItem.create!({ user: [users.sample],retro:retro })
end
