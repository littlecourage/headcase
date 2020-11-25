@meditations.each do |meditation|

  json.set! meditation.id do
    json.partial! "api/meditations/meditation", meditation: meditation
  end

end