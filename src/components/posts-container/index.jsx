import { PostsDiv } from './style'
import { useEffect, useState } from 'react'
import { PostWrapper } from '../post-wrapper'
import { nanoid } from 'nanoid'
import { api } from '../../api'

const posts = []
const users = []

export const PostsContainer = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get('/posts')
      .then((res) => {
        posts.push(...res.data)
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      })

    api
      .get('/users')
      .then((res) => {
        users.push(...res.data)
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <PostsDiv>
      {posts.map((post) => {
        let filtered = users.find((user) => post.userId === user.id)
        let { name, username } = filtered

        return (
          !loading && (
            <PostWrapper
              key={nanoid()}
              name={name}
              username={username}
              title={post.title}
              post={post.body}
              postId={post.id}
              onClick={() => console.log('deu bom!')}
            />
          )
        )
      })}
    </PostsDiv>
  )
}
