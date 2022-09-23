import { nanoid } from 'nanoid'
import { PostComments } from '../PostComments'
import { PostContent } from '../PostContent'
import { PostHeader } from '../PostHeader'
import { UserAvatar } from '../UserAvatar'
import { PostDiv } from './styles'

export const Post = ({ user, post }) => {
  return (
    <PostDiv key={nanoid()}>
      <UserAvatar src={user.avatar} />
      <div>
        <PostHeader name={user.name} username={user.username} />
        <PostContent title={post.title} post={post.body} />
        <PostComments postId={post.id} />
      </div>
    </PostDiv>
  )
}
