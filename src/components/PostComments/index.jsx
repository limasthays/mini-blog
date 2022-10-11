import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from 'react'
import { api } from '../../api'
import { CommentsModal } from '../comments-modal'
import { ModalCommentsContext } from '../../contexts/ModalContext'
import { PostCommentsIcons } from './style'

export const PostComments = ({ postId, user, post, avatar }) => {
  const [loading, setLoading] = useState(true)
  const [commentsList, setCommentsList] = useState([])

  const { isOpen, setIsOpen } = useContext(ModalCommentsContext)

  useEffect(() => {
    api.get(`/posts/${postId}/comments`).then(({ data }) => {
      setCommentsList(data)
      setLoading(false)
    })
  }, [])

  return loading ? (
    <>
      <span>loading</span>
    </>
  ) : (
    <>
      <PostCommentsIcons
        onClick={() => {
          setIsOpen(true)
        }}
      >
        <FontAwesomeIcon icon={faCommentAlt} />
        <span>{commentsList.length} comments </span>
      </PostCommentsIcons>
      {isOpen && <CommentsModal user={user} post={post} avatar={avatar} />}
    </>
  )
}
