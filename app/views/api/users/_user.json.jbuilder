json.key_format! camelize: :lower
json.extract! user, :id, :email, :first_name, :last_name

json.current_meditation user.current_meditation
json.current_user_pack user.current_user_pack
json.current_pack user.current_user_pack.pack
json.current_track user.current_track

if user.current_track_attached?
  json.trackUrl url_for(user.current_track)
else
  json.trackUrl ""
end