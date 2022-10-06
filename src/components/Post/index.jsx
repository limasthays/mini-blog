import { nanoid } from 'nanoid'
import { PostComments } from '../PostComments'
import { PostContent } from '../PostContent'
import { PostHeader } from '../PostHeader'
import { UserAvatar } from '../UserAvatar'
import { PostDiv } from './styles'
import { ModalCommentsProvider } from '../../contexts/ModalContext'

export const Post = ({ user, post, avatar }) => {
  return (
    <PostDiv key={nanoid()}>
      <UserAvatar src={user.avatar || avatar} />
      <div>
        <PostHeader
          name={user.name}
          username={user.username}
          id={user.id}
          post={post}
        />
        <PostContent title={post.title} post={post.body} />

        <ModalCommentsProvider>
          <PostComments
            postId={post.id}
            user={user}
            post={post}
            avatar={avatar}
          />
        </ModalCommentsProvider>
      </div>
    </PostDiv>
  )
}
