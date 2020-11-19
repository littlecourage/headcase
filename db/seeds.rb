# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(
  first_name: "Demo",
  last_name: "User",
  email: "demouser@email.email",
  password_digest: BCrypt::Password.create('password'),
  session_token: SecureRandom.base64
)