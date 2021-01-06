json.key_format! camelize: :lower

json.extract! pack, :id, :title, :category_id, :length, :meditations
json.thumbnailUrl url_for(pack.thumbnail)