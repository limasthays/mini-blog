import { Post } from '../Post'
import { nanoid } from 'nanoid'

export const ProfilePostsBox = ({ userData, posts, avatar }) => {
  return (
    <>
      {posts?.map((post) => (
        <Post key={nanoid()} user={userData} post={post} avatar={avatar} />
      ))}
    </>
  )
}
