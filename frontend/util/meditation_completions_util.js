
export const createMeditationCompletion = (completion) => {
  return $.ajax({
    method: 'POST',
    url: '/api/meditation_completions',
    data: completion,
  })
}