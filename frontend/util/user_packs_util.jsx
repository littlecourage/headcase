
export const fetchAllUserPacks = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/user_packs'
  })
}

export const fetchUserPack = (userPackId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/user_packs/${userPackId}`
  })
}

