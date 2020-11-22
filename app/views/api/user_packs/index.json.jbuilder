@user_packs.each do |user_pack|
  debugger
  json.set! user_pack.id do
    json.partial! "api/user_packs/user_pack", user_pack: user_pack
  end

  json.set! user_pack.pack_id do
    json.extract! pack.title
  end

end