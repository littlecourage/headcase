
export const createMeditationCompletion = (meditationCompletion) => {
  return $.ajax({
    method: 'POST',
    url: '/api/meditation_completions',
    data: meditationCompletion,
  })
}