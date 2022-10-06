import { StyledCommmentsModal } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { ModalCommentsContext } from '../../contexts/ModalContext'
import { useContext } from 'react'
import { PostHeader } from '../PostHeader'
import { PostContent } from '../PostContent'
import { UserAvatar } from '../UserAvatar'
import { Comments } from '../Comments'

export const CommentsModal = ({ user, post, avatar }) => {
  const { setIsOpen } = useContext(ModalCommentsContext)

  return (
    <StyledCommmentsModal>
      <div className="post-modal">
        <FontAwesomeIcon
          icon={faWindowClose}
          onClick={() => {
            setIsOpen(false)
          }}
        />

        <div>
          <UserAvatar src={user.avatar || avatar} />
          <PostHeader name={user.name} username={user.username} id={user.id} />
        </div>
        <PostContent title={post.title} post={post.body} />

        <Comments postId={post.id} />
      </div>
    </StyledCommmentsModal>
  )
}
