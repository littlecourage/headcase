json.key_format! camelize: :lower

json.extract! meditation, :id, :order, :pack_id

if meditation.track.attached?
  json.trackUrl url_for(meditation.track)
else
  json.trackUrl ""
end