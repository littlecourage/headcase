@packs.each do |pack|
   
  json.set! pack.id do 
    json.partial! "api/packs/pack", pack: pack
  end
end

# packs: {
#   id: {
#     id,
#     title,
#     category
#   }
# }