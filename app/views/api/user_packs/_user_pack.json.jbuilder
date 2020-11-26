json.key_format! camelize: :lower

json.extract! user_pack, :id, :pack_id, :user_id

json.length user_pack.length
json.user_pack_completed? user_pack.user_pack_completed?
json.played_meditations user_pack.played_meditations
json.current_track user_pack.current_track

json.pack do
  json.partial! "api/packs/pack", pack: user_pack.pack
end

json.meditations do
  user_pack.meditations.each do |meditation|
    json.extract! meditation, :id, :order, :pack_id
    if meditation.track.attached?
      json.trackUrl url_for(meditation.track)
    else
      json.trackUrl ""
    end
  end

end


# json.meditations do
#   user_pack.meditations.each do |meditation|
#     json.partial! "api/meditations/meditation", meditations: user_pack.meditations
#   end
# end


# def get_pack_partial(pack)
#   camelize = True
#   json.extract(pack, ['id', 'title', 'category_id'])
#   json.thumbnailUrl url_for(pack.thumbnail_url)
# ends