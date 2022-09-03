
import request from 'superagent'

export function getMemes() {
  return request.get('/api/v1/memes')
  .then((response) => {
    // console.log('response.body',response.body)
   return  response.body[Math.floor(Math.random()*response.body.length)].url

    })
}
