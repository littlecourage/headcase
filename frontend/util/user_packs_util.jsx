
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


export const createUserPack = (userPack) => {
  return $.ajax({
    method: "POST",
    url: '/api/user_packs',
    data: { userPack: userPack }
  })
}

export const deleteUserPack = (userPackId) => {
  
  return $.ajax({
    method: 'DELETE',
    url: `/api/user_packs/${userPackId}`
  })
}
