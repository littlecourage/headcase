

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