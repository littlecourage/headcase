
export const fetchAllCategories = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/categories'
  })
}

export const fetchCategory = (categoryId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/packs/${categoryId}`
  })
}