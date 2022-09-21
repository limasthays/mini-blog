import { api } from '../../api'

export let posts = []

api
  .get('/posts')
  .then((res) => {
    posts.push(res)
  })
  .catch((err) => {
    console.error(err)
  })
