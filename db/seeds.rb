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
  pack1 = Pack.create!(title: "Happiness", category_id: category1.id, length: 3)
  pack1Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_yellow_1.png')
  p "uploading pic..."
  pack1.thumbnail.attach(io: pack1Thumbnail, filename:"pack_background_yellow_1.png")

  pack2 = Pack.create!(title: "Self-esteem", category_id: category1.id, length: 2)
  pack2Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_teal_1.png')
  p "uploading pic..."
  pack2.thumbnail.attach(io: pack2Thumbnail, filename:"pack_background_teal_1.png")

  pack3 = Pack.create!(title: "Patience", category_id: category1.id, length: 4)
  pack3Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_gray_1.png')
  p "uploading pic..."
  pack3.thumbnail.attach(io: pack3Thumbnail, filename:"pack_background_gray_1.png")

  pack4 = Pack.create(title: "Kindness", category_id: category1.id, length: 5)
  pack4Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_yellow_2.png')
  p "uploading pic..."
  pack4.thumbnail.attach(io: pack4Thumbnail, filename:"pack_background_yellow_2.png")

  pack5 = Pack.create(title: "Relationships", category_id: category1.id, length: 3)
  pack5Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_orange_1.png')
  p "uploading pic..."
  pack5.thumbnail.attach(io: pack5Thumbnail, filename:"pack_background_orange_1.png")

  p 'Health packs...'
  pack6 = Pack.create!(title: "Sleep", category_id: category2.id, length: 5)
  pack6Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_gray_2.png')
  p "uploading pic..."
  pack6.thumbnail.attach(io: pack6Thumbnail, filename:"pack_background_gray_2.png")

  pack7 = Pack.create!(title: "Letting Go of Stress", category_id: category2.id, length: 3)
  pack7Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_teal_2.png')
  p "uploading pic..."
  pack7.thumbnail.attach(io: pack7Thumbnail, filename:"pack_background_teal_2.png")

  pack8 = Pack.create!(title: "Pain Management", category_id: category2.id, length: 2)
  pack8Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_orange_2.png')
  p "uploading pic..."
  pack8.thumbnail.attach(io: pack8Thumbnail, filename:"pack_background_orange_2.png")

  pack9 = Pack.create!(title: "Managing Anxiety", category_id: category2.id, length: 4)
  pack9Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_teal_3.png')
  p "uploading pic..."
  pack9.thumbnail.attach(io: pack9Thumbnail, filename:"pack_background_teal_3.png")

  p 'Brave packs...'
  pack10 = Pack.create!(title: "Restlessness", category_id: category3.id, length: 3)
  pack10Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_orange_3.png')
  p "uploading pic..."
  pack10.thumbnail.attach(io: pack10Thumbnail, filename:"pack_background_orange_3.png")

  pack11 = Pack.create!(title: "Transforming Anger", category_id: category3.id, length: 2)
  pack11Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_gray_3.png')
  p "uploading pic..."
  pack11.thumbnail.attach(io: pack11Thumbnail, filename:"pack_background_gray_3.png")

  pack12 = Pack.create!(title: "Navigating Change", category_id: category3.id, length: 3)
  pack12Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_yellow_3.png')
  p "uploading pic..."
  pack12.thumbnail.attach(io: pack12Thumbnail, filename:"pack_background_yellow_3.png")

  pack13 = Pack.create!(title: "Handling Sadness", category_id: category3.id, length: 4)
  pack13Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_gray_4.png')
  p "uploading pic..."
  pack13.thumbnail.attach(io: pack13Thumbnail, filename:"pack_background_gray_4.png")

  pack14 = Pack.create!(title: "Grieving", category_id: category3.id, length: 5)
  pack14Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_teal_4.png')
  p "uploading pic..."
  pack14.thumbnail.attach(io: pack14Thumbnail, filename:"pack_background_teal_4.png")

  pack15 = Pack.create!(title: "Dealing with Regret", category_id: category3.id, length: 4)
  pack15Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_orange_4.png')
  p "uploading pic..."
  pack15.thumbnail.attach(io: pack15Thumbnail, filename:"pack_background_orange_4.png")

  p 'Work & Performance packs...'
  pack16 = Pack.create!(title: "Balance", category_id: category4.id, length: 2)
  pack16Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_yellow_5.png')
  p "uploading pic..."
  pack16.thumbnail.attach(io: pack16Thumbnail, filename:"pack_background_yellow_5.png")

  pack17 = Pack.create!(title: "Creativity", category_id: category4.id, length: 5)
  pack17Thumbnail = open('https://headcase-seeds.s3.amazonaws.com/Pack_thumbnails/pack_background_yellow_4.png')
  p "uploading pic..."
  pack17.thumbnail.attach(io: pack17Thumbnail, filename:"pack_background_yellow_4.png")


  # pack18 = Pack.create!(title: "Prioritization", category_id: category4.id)
  # pack19 = Pack.create!(title: "Productivity", category_id: category4.id)

  p 'Creating meditations...'
  p 'Pack 1 meditations...'
  med1 = Meditation.create!(order: 1, pack_id: pack1.id)
  med1Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Freedom_change_1.mp3')
  p 'uploading med...'
  med1.track.attach(io: med1Track, filename:"Freedom_change_1.mp3")
  med2 = Meditation.create!(order: 2, pack_id: pack1.id)
  med2Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Freedom_change_2.mp3')
  p 'uploading med...'
  med2.track.attach(io: med2Track, filename:"Freedom_change_2.mp3")
  med3 = Meditation.create!(order: 3, pack_id: pack1.id)
  med3Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Freedom_change_3.mp3')
  p 'uploading med...'
  med3.track.attach(io: med3Track, filename:"Freedom_change_3.mp3")

  p 'Pack 2 meditations...'
  med4 = Meditation.create!(order: 1, pack_id: pack2.id)
  med4Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/kindness_med_1.mp3')
  p 'uploading med...'
  med4.track.attach(io: med4Track, filename:"kindness_med_1.mp3")
  med5 = Meditation.create!(order: 2, pack_id: pack2.id)
  med5Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/kindness_med_2.mp3')
  p 'uploading med...'
  med5.track.attach(io: med5Track, filename:"kindness_med_2.mp3")

  p 'Pack 3 meditations...'
  med5 = Meditation.create!(order: 1, pack_id: pack3.id)
  med5Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/kindness_med_1.mp3')
  p 'uploading med...'
  med5.track.attach(io: med5Track, filename:"kindness_med_1.mp3")
  med6 = Meditation.create!(order: 2, pack_id: pack3.id)
  med6Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/kindness_med_2.mp3')
  p 'uploading med...'
  med6.track.attach(io: med6Track, filename:"kindness_med_2.mp3")
  med7 = Meditation.create!(order: 3, pack_id: pack3.id)
  med7Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Freedom_change_1.mp3')
  p 'uploading med...'
  med7.track.attach(io: med7Track, filename:"Freedom_change_1.mp3")
  med8 = Meditation.create!(order: 4, pack_id: pack3.id)
  med8Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Freedom_change_2.mp3')
  p 'uploading med...'
  med8.track.attach(io: med8Track, filename:"Freedom_change_2.mp3")

  p 'Pack 4 Meditations...'
  med9 = Meditation.create!(order: 1, pack_id: pack4.id)
  med9Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Freedom_change_3.mp3')
  p 'uploading med...'
  med9.track.attach(io: med9Track, filename:"Freedom_change_3.mp3")
  med10 = Meditation.create!(order: 2, pack_id: pack4.id)
  med10Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Mindfulness_difficulties_1.mp3')
  p 'uploading med...'
  med10.track.attach(io: med10Track, filename:"Mindfulness_difficulties_1.mp3")
  med11 = Meditation.create!(order: 3, pack_id: pack4.id)
  med11Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Mindfulness_difficulties_2.mp3')
  p 'uploading med...'
  med11.track.attach(io: med11Track, filename:"Mindfulness_difficulties_2.mp3")
  med12 = Meditation.create!(order: 4, pack_id: pack4.id)
  med12Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Mindfulness_difficulties_3.mp3')
  p 'uploading med...'
  med12.track.attach(io: med12Track, filename:"Mindfulness_difficulties_3.mp3")
  med13 = Meditation.create!(order: 5, pack_id: pack4.id)
  med13Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Mindfulness_difficulties_4.mp3')
  p 'uploading med...'
  med13.track.attach(io: med13Track, filename:"Mindfulness_difficulties_4.mp3")
  
  p 'Pack 5 meditations...'
  med14 = Meditation.create!(order: 1, pack_id: pack5.id)
  med14Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Holding_in_heart_1.mp3')
  p 'uploading med...'
  med14.track.attach(io: med14Track, filename:"Holding_in_heart_1.mp3")
  med15 = Meditation.create!(order: 2, pack_id: pack5.id)
  med15Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Holding_in_heart_2.mp3')
  p 'uploading med...'
  med15.track.attach(io: med15Track, filename:"Holding_in_heart_2.mp3")
  med16 = Meditation.create!(order: 3, pack_id: pack5.id)
  med16Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Holding_in_heart_3.mp3')
  p 'uploading med...'
  med16.track.attach(io: med16Track, filename:"Holding_in_heart_3.mp3")

  p 'Pack 6 meditations...'
  med17 = Meditation.create!(order: 1, pack_id: pack6.id)
  med17Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Holding_in_heart_1.mp3')
  p 'uploading med...'
  med17.track.attach(io: med17Track, filename:"Holding_in_heart_1.mp3")
  med18 = Meditation.create!(order: 2, pack_id: pack6.id)
  med18Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Holding_in_heart_2.mp3')
  p 'uploading med...'
  med18.track.attach(io: med18Track, filename:"Holding_in_heart_2.mp3")
  med19 = Meditation.create!(order: 3, pack_id: pack6.id)
  med19Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Holding_in_heart_3.mp3')
  p 'uploading med...'
  med19.track.attach(io: med19Track, filename:"Holding_in_heart_3.mp3")
  med20 = Meditation.create!(order: 4, pack_id: pack6.id)
  med20Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/kindness_med_1.mp3')
  p 'uploading med...'
  med20.track.attach(io: med20Track, filename:"kindness_med_1.mp3")
  med21 = Meditation.create!(order: 5, pack_id: pack6.id)
  med21Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/kindness_med_2.mp3')
  p 'uploading med...'
  med21.track.attach(io: med21Track, filename:"kindness_med_2.mp3")


  p 'Pack 7 meditations...'
  med22 = Meditation.create!(order: 1, pack_id: pack7.id)
  med22Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Freedom_change_1.mp3')
  p 'uploading med...'
  med22.track.attach(io: med22Track, filename:"Freedom_change_1.mp3")
  med23 = Meditation.create!(order: 2, pack_id: pack7.id)
  med23Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Freedom_change_2.mp3')
  p 'uploading med...'
  med23.track.attach(io: med23Track, filename:"Freedom_change_2.mp3")
  med24 = Meditation.create!(order: 3, pack_id: pack7.id)
  med24Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Freedom_change_3.mp3')
  p 'uploading med...'
  med24.track.attach(io: med24Track, filename:"Freedom_change_3.mp3")

  p 'Pack 8 meditations...'
  med25 = Meditation.create!(order: 1, pack_id: pack8.id)
  med25Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/kindness_med_1.mp3')
  p 'uploading med...'
  med25.track.attach(io: med25Track, filename:"kindness_med_1.mp3")
  med26 = Meditation.create!(order: 2, pack_id: pack8.id)
  med26Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/kindness_med_2.mp3')
  p 'uploading med...'
  med26.track.attach(io: med26Track, filename:"kindness_med_2.mp3")

  p 'Pack 9 meditations...'
  med27 = Meditation.create!(order: 1, pack_id: pack9.id)
  med27Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Mindfulness_difficulties_1.mp3')
  p 'uploading med...'
  med27.track.attach(io: med27Track, filename:"Mindfulness_difficulties_1.mp3")
  med28 = Meditation.create!(order: 2, pack_id: pack9.id)
  med28Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Mindfulness_difficulties_2.mp3')
  p 'uploading med...'
  med28.track.attach(io: med28Track, filename:"Mindfulness_difficulties_2.mp3")
  med29 = Meditation.create!(order: 3, pack_id: pack9.id)
  med29Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Mindfulness_difficulties_3.mp3')
  p 'uploading med...'
  med29.track.attach(io: med29Track, filename:"Mindfulness_difficulties_3.mp3")
  med30 = Meditation.create!(order: 4, pack_id: pack9.id)
  med30Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Mindfulness_difficulties_4.mp3')
  p 'uploading med...'
  med30.track.attach(io: med30Track, filename:"Mindfulness_difficulties_4.mp3")

  p 'Pack 10 meditations...'
  med31 = Meditation.create!(order: 1, pack_id: pack10.id)
  med31Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Freedom_change_1.mp3')
  p 'uploading med...'
  med31.track.attach(io: med31Track, filename:"Freedom_change_1.mp3")
  med32 = Meditation.create!(order: 2, pack_id: pack10.id)
  med32Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Freedom_change_2.mp3')
  p 'uploading med...'
  med32.track.attach(io: med32Track, filename:"Freedom_change_2.mp3")
  med33 = Meditation.create!(order: 3, pack_id: pack10.id)
  med33Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Freedom_change_3.mp3')
  p 'uploading med...'
  med33.track.attach(io: med33Track, filename:"Freedom_change_3.mp3")

  p 'Pack 11 meditations...'
  med34 = Meditation.create!(order: 1, pack_id: pack11.id)
  med34Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/kindness_med_1.mp3')
  p 'uploading med...'
  med34.track.attach(io: med34Track, filename:"kindness_med_1.mp3")
  med35 = Meditation.create!(order: 2, pack_id: pack11.id)
  med35Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/kindness_med_2.mp3')
  p 'uploading med...'
  med35.track.attach(io: med35Track, filename:"kindness_med_2.mp3")

  p 'Pack 12 meditations...'
  med36 = Meditation.create!(order: 1, pack_id: pack12.id)
  med36Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Holding_in_heart_1.mp3')
  p 'uploading med...'
  med36.track.attach(io: med36Track, filename:"Holding_in_heart_1.mp3")
  med37 = Meditation.create!(order: 2, pack_id: pack12.id)
  med37Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Holding_in_heart_2.mp3')
  p 'uploading med...'
  med37.track.attach(io: med37Track, filename:"Holding_in_heart_2.mp3")
  med38 = Meditation.create!(order: 3, pack_id: pack12.id)
  med38Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Holding_in_heart_3.mp3')
  p 'uploading med...'
  med38.track.attach(io: med38Track, filename:"Holding_in_heart_3.mp3")

  p 'Pack 13 meditations...'
  med39 = Meditation.create!(order: 1, pack_id: pack13.id)
  med39Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Mindfulness_difficulties_1.mp3')
  p 'uploading med...'
  med39.track.attach(io: med39Track, filename:"Mindfulness_difficulties_1.mp3")
  med40 = Meditation.create!(order: 2, pack_id: pack13.id)
  med40Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Mindfulness_difficulties_2.mp3')
  p 'uploading med...'
  med40.track.attach(io: med40Track, filename:"Mindfulness_difficulties_2.mp3")
  med41 = Meditation.create!(order: 3, pack_id: pack13.id)
  med41Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Mindfulness_difficulties_3.mp3')
  p 'uploading med...'
  med41.track.attach(io: med41Track, filename:"Mindfulness_difficulties_3.mp3")
  med42 = Meditation.create!(order: 4, pack_id: pack13.id)
  med42Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Mindfulness_difficulties_4.mp3')
  p 'uploading med...'
  med42.track.attach(io: med42Track, filename:"Mindfulness_difficulties_4.mp3")

  p 'Pack 14 meditations...'
  med43 = Meditation.create!(order: 1, pack_id: pack14.id)
  med43Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Freedom_change_3.mp3')
  p 'uploading med...'
  med43.track.attach(io: med43Track, filename:"Freedom_change_3.mp3")
  med44 = Meditation.create!(order: 2, pack_id: pack14.id)
  med44Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Mindfulness_difficulties_1.mp3')
  p 'uploading med...'
  med44.track.attach(io: med44Track, filename:"Mindfulness_difficulties_1.mp3")
  med45 = Meditation.create!(order: 3, pack_id: pack14.id)
  med45Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Mindfulness_difficulties_2.mp3')
  p 'uploading med...'
  med45.track.attach(io: med45Track, filename:"Mindfulness_difficulties_2.mp3")
  med46 = Meditation.create!(order: 4, pack_id: pack14.id)
  med46Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Mindfulness_difficulties_3.mp3')
  p 'uploading med...'
  med46.track.attach(io: med46Track, filename:"Mindfulness_difficulties_3.mp3")
  med47 = Meditation.create!(order: 5, pack_id: pack14.id)
  med47Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Mindfulness_difficulties_4.mp3')
  p 'uploading med...'
  med47.track.attach(io: med47Track, filename:"Mindfulness_difficulties_4.mp3")

  p 'Pack 15 meditations...'
  med48 = Meditation.create!(order: 1, pack_id: pack15.id)
  med48Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/kindness_med_1.mp3')
  p 'uploading med...'
  med48.track.attach(io: med48Track, filename:"kindness_med_1.mp3")
  med49 = Meditation.create!(order: 2, pack_id: pack15.id)
  med49Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/kindness_med_2.mp3')
  p 'uploading med...'
  med49.track.attach(io: med49Track, filename:"kindness_med_2.mp3")
  med50 = Meditation.create!(order: 3, pack_id: pack15.id)
  med50Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Freedom_change_1.mp3')
  p 'uploading med...'
  med50.track.attach(io: med50Track, filename:"Freedom_change_1.mp3")
  med51 = Meditation.create!(order: 4, pack_id: pack15.id)
  med51Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Freedom_change_2.mp3')
  p 'uploading med...'
  med51.track.attach(io: med51Track, filename:"Freedom_change_2.mp3")

  p 'Pack 16 meditations...'
  med52 = Meditation.create!(order: 1, pack_id: pack16.id)
  med52Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/kindness_med_1.mp3')
  p 'uploading med...'
  med52.track.attach(io: med52Track, filename:"kindness_med_1.mp3")
  med53 = Meditation.create!(order: 2, pack_id: pack16.id)
  med53Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/kindness_med_2.mp3')
  p 'uploading med...'
  med53.track.attach(io: med53Track, filename:"kindness_med_2.mp3")

  p 'Pack 17 meditations...'
  med54 = Meditation.create!(order: 1, pack_id: pack17.id)
  med54Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Freedom_change_3.mp3')
  p 'uploading med...'
  med54.track.attach(io: med54Track, filename:"Freedom_change_3.mp3")
  med55 = Meditation.create!(order: 2, pack_id: pack17.id)
  med55Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Mindfulness_difficulties_1.mp3')
  p 'uploading med...'
  med55.track.attach(io: med55Track, filename:"Mindfulness_difficulties_1.mp3")
  med56 = Meditation.create!(order: 3, pack_id: pack17.id)
  med56Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Mindfulness_difficulties_2.mp3')
  p 'uploading med...'
  med56.track.attach(io: med56Track, filename:"Mindfulness_difficulties_2.mp3")
  med57 = Meditation.create!(order: 4, pack_id: pack17.id)
  med57Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Mindfulness_difficulties_3.mp3')
  p 'uploading med...'
  med57.track.attach(io: med57Track, filename:"Mindfulness_difficulties_3.mp3")
  med58 = Meditation.create!(order: 5, pack_id: pack17.id)
  med58Track = open('https://headcase-seeds.s3.amazonaws.com/meditations/Mindfulness_difficulties_4.mp3')
  p 'uploading med...'
  med58.track.attach(io: med58Track, filename:"Mindfulness_difficulties_4.mp3")

  p 'Creating User Packs for demo user...'
  up1 = UserPack.create!(user_id: demo_user.id, pack_id: pack1.id, current_med_no: 3)
  up2 = UserPack.create!(user_id: demo_user.id, pack_id: pack6.id, current_med_no: 1)
  up3 = UserPack.create!(user_id: demo_user.id, pack_id: pack7.id, current_med_no: 1)
  up4 = UserPack.create!(user_id: demo_user.id, pack_id: pack5.id, current_med_no: 1)
  up5 = UserPack.create!(user_id: demo_user.id, pack_id: pack17.id, current_med_no: 2)

  p 'Creating Meditation completions...'
  mc1 = MeditationCompletion.create!(user_pack_id: up1.id, med_id: med1.id)
  up1.increment_current_med_no!
  mc2 = MeditationCompletion.create!(user_pack_id: up1.id, med_id: med2.id)
  up1.increment_current_med_no!
  mc3 = MeditationCompletion.create!(user_pack_id: up3.id, med_id: med22.id)
  up3.increment_current_med_no!
  mc4 = MeditationCompletion.create!(user_pack_id: up3.id, med_id: med23.id)
  up3.increment_current_med_no!
  mc5 = MeditationCompletion.create!(user_pack_id: up3.id, med_id: med24.id)
  up3.increment_current_med_no!
  mc6 = MeditationCompletion.create!(user_pack_id: up5.id, med_id: med54.id)
  up5.increment_current_med_no!
end
