
export const createMeditationCompletion = (completion) => {
  $.ajax({
    method: 'POST',method,
    url: '/api/meditation_completions',
    data: completion
  })
}