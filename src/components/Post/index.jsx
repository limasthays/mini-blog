import { nanoid } from 'nanoid'
import { PostComments } from '../PostComments'
import { PostContent } from '../PostContent'
import { PostHeader } from '../PostHeader'
import { UserAvatar } from '../UserAvatar'
import { PostDiv } from './styles'
import { ModalCommentsProvider } from '../../contexts/ModalContext'

export const Post = ({ user, post }) => {
  return (
    <PostDiv key={nanoid()}>
      <UserAvatar src={user.avatar} />
      <div>
        <PostHeader name={user.name} username={user.username} id={user.id} />
        <PostContent title={post.title} post={post.body} />

        <ModalCommentsProvider>
          <PostComments postId={post.id} user={user} post={post} />
        </ModalCommentsProvider>
      </div>
    </PostDiv>
  )
}
