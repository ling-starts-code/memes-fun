
import request from 'superagent'

export function getMemes() {
  return request.get('/api/v1/memes')
  .then((response) => {
   return  response.body
    })
}
