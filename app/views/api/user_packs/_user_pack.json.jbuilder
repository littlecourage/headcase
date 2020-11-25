json.key_format! camelize: :lower

json.extract! user_pack, :id, :pack_id, :user_id

json.length user_pack.length
json.user_pack_completed? user_pack.user_pack_completed?
json.played_meditations user_pack.played_meditations
json.current_track user_pack.current_track

json.pack do
  json.partial! "api/packs/pack", pack: user_pack.pack
end


# def get_pack_partial(pack)
#   camelize = True
#   json.extract(pack, ['id', 'title', 'category_id'])
#   json.thumbnailUrl url_for(pack.thumbnail_url)
# ends