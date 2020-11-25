
export const fetchAllUserPacks = () => {
  $.ajax({
    method: 'GET',
    url: '/api/user_packs'
  })
}

export const fetchUserPack = (userPackId) => {
  $.ajax({
    method: 'GET',
    url: `/api/user_packs/${userPackId}`
  })
}

