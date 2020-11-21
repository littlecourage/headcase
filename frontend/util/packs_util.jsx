export const fetchAllPacks = () => {
  return $.ajax({
    method: 'GET', 
    url: '/api/packs'
  })
}

export const fetchPack = (packId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/packs/${packId}`
  })
}