# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.create(
#   first_name: "Demo",
#   last_name: "User",
#   email: "demouser@email.email",
#   password_digest: BCrypt::Password.create('password'),
#   session_token: SecureRandom.base64
# )

require 'open-uri'
require 'date'

ActiveRecord::Base.transaction do 

  User.destroy_all
  Category.destroy_all
  Pack.destroy_all
  UserPack.destroy_all

  #Demo User
  p 'creating Demo User...'
  demo_user = User.create!(
    email: "email@email.email", 
    first_name: "Demo User", 
    last_name: "User", 
    password: "password"
  )

  p 'creating Categories...'
  category1 = Category.create!(name: "Happiness")
  category2 = Category.create!(name: "Health")
  category3 = Category.create!(name: "Brave")
  category4 = Category.create!(name: "Work & Performance")

  p 'creating Packs...'
  p 'Happiness packs...'
  pack1 = Pack.create!(title: "Happiness", category_id: category1.id)
  pack1Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_yellow_1.png')
  p "uploading pic..."
  pack1.thumbnail.attach(io: pack1Thumbnail, filename:"pack_background_yellow_1.png")

  pack2 = Pack.create!(title: "Self-esteem", category_id: category1.id)
  pack2Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_teal_1.png')
  p "uploading pic..."
  pack2.thumbnail.attach(io: pack2Thumbnail, filename:"pack_background_teal_1.png")

  pack3 = Pack.create!(title: "Patience", category_id: category1.id)
  pack3Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_gray_1.png')
  p "uploading pic..."
  pack3.thumbnail.attach(io: pack3Thumbnail, filename:"pack_background_gray_1.png")


  pack4 = Pack.create(title: "Kindness", category_id: category1.id)
  pack4Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_yellow_2.png')
  p "uploading pic..."
  pack4.thumbnail.attach(io: pack4Thumbnail, filename:"pack_background_yellow_2.png")

  pack5 = Pack.create(title: "Relationships", category_id: category1.id)
  pack5Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_orange_1.png')
  p "uploading pic..."
  pack5.thumbnail.attach(io: pack5Thumbnail, filename:"pack_background_orange_1.png")

  p 'Health packs...'
  pack6 = Pack.create!(title: "Sleep", category_id: category2.id)
  pack6Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_gray_2.png')
  p "uploading pic..."
  pack6.thumbnail.attach(io: pack6Thumbnail, filename:"pack_background_gray_2.png")


  pack7 = Pack.create!(title: "Letting Go of Stress", category_id: category2.id)
  pack7Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_teal_2.png')
  p "uploading pic..."
  pack7.thumbnail.attach(io: pack7Thumbnail, filename:"pack_background_teal_2.png")


  pack8 = Pack.create!(title: "Pain Management", category_id: category2.id)
  pack8Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_orange_2.png')
  p "uploading pic..."
  pack8.thumbnail.attach(io: pack8Thumbnail, filename:"pack_background_orange_2.png")

  pack9 = Pack.create!(title: "Managing Anxiety", category_id: category2.id)
  pack9Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_teal_3.png')
  p "uploading pic..."
  pack9.thumbnail.attach(io: pack9Thumbnail, filename:"pack_background_teal_3.png")

  p 'Brave packs...'
  pack10 = Pack.create!(title: "Restlessness", category_id: category3.id)
  pack10Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_orange_3.png')
  p "uploading pic..."
  pack10.thumbnail.attach(io: pack10Thumbnail, filename:"pack_background_orange_3.png")


  pack11 = Pack.create!(title: "Transforming Anger", category_id: category3.id)
  pack11Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_gray_3.png')
  p "uploading pic..."
  pack11.thumbnail.attach(io: pack11Thumbnail, filename:"pack_background_gray_3.png")

  pack12 = Pack.create!(title: "Navigating Change", category_id: category3.id)
  pack12Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_yellow_3.png')
  p "uploading pic..."
  pack12.thumbnail.attach(io: pack12Thumbnail, filename:"pack_background_yellow_3.png")


  pack13 = Pack.create!(title: "Handling Sadness", category_id: category3.id)
  pack13Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_gray_4.png')
  p "uploading pic..."
  pack13.thumbnail.attach(io: pack13Thumbnail, filename:"pack_background_gray_4.png")

  pack14 = Pack.create!(title: "Grieving", category_id: category3.id)
  pack14Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_teal_4.png')
  p "uploading pic..."
  pack14.thumbnail.attach(io: pack14Thumbnail, filename:"pack_background_teal_4.png")

  pack15 = Pack.create!(title: "Dealing with Regret", category_id: category3.id)
  pack15Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_orange_4.png')
  p "uploading pic..."
  pack15.thumbnail.attach(io: pack15Thumbnail, filename:"pack_background_orange_4.png")

  p 'Work & Performance packs...'
  pack16 = Pack.create!(title: "Balance", category_id: category4.id)
  pack16Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_yellow_5.png')
  p "uploading pic..."
  pack16.thumbnail.attach(io: pack16Thumbnail, filename:"pack_background_yellow_5.png")


  pack17 = Pack.create!(title: "Creativity", category_id: category4.id)
  pack17Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_yellow_4.png')
  p "uploading pic..."
  pack17.thumbnail.attach(io: pack17Thumbnail, filename:"pack_background_yellow_4.png")


  # pack18 = Pack.create!(title: "Prioritization", category_id: category4.id)
  # pack19 = Pack.create!(title: "Productivity", category_id: category4.id)


  p 'Creating User Packs for demo user...'
  up1 = UserPack.create!(user_id: demo_user.id, pack_id: pack1.id)
  up2 = UserPack.create!(user_id: demo_user.id, pack_id: pack6.id)
  up3 = UserPack.create!(user_id: demo_user.id, pack_id: pack7.id)
  up4 = UserPack.create!(user_id: demo_user.id, pack_id: pack5.id)
  up5 = UserPack.create!(user_id: demo_user.id, pack_id: pack17.id)


  

end
