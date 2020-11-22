@user_packs.each do |user_pack|

  json.set! user_pack.id do
    json.partial! "api/user_packs/user_pack", user_pack: user_pack
  end

end