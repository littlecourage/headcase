

export const fetchAllMeditations = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/meditations'
  })
}

export const fetchMeditation = (meditationId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/meditations/${meditationId}`
  })
}

export const fetchMedUserPack = (meditationId) => {
  return $.ajax({
    medthod: 'GET',
    url: `/api/meditations/${meditationId}/up`
  })
}