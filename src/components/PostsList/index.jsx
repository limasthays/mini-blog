import { nanoid } from 'nanoid'
import { Post } from '../Post'

export const PostsList = ({ list }) => {
  return (
    <>
      {list.map(({ user, post }) => (
        <div key={nanoid()}>
          <Post user={user} post={post} />
        </div>
      ))}
    </>
  )
}
