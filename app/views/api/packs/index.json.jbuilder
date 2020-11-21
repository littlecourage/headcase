@packs.each do |pack|
  debugger
  json.packs do
    json.set! pack.id do 
      json.partial! "api/packs/pack", pack: pack
    end
  end
end

# packs: {
#   id: {
#     id,
#     title,
#     category
#   }
# }