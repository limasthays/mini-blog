import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { api } from '../../api'

import { AvatarGenerator } from 'random-avatar-generator'
import { PostsList } from '../PostsList'

const posts = []
const users = []
const database = []

export const PostsContainer = () => {
  const [loading, setLoading] = useState(true)

  const avatarGenerator = new AvatarGenerator()

  useEffect(() => {
    api
      .get('/posts')
      .then((resPosts) => {
        posts.push(...resPosts.data)

        api
          .get('/users')
          .then((resUsers) => {
            users.push(...resUsers.data)

            users.forEach((user) => {
              user.avatar = avatarGenerator.generateRandomAvatar()
            })

            for (let i = 0; i < posts.length; i++) {
              let singlePost = posts[i]
              let singleUser = users.find(
                (user) => user.id === singlePost.userId
              )

              database.push({
                user: singleUser,
                post: singlePost,
              })
            }

            setLoading(false)
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  })

  return loading ? (
    <div>loading...</div>
  ) : (
    <>
      <PostsList key={nanoid()} list={database} />
    </>
  )
}
