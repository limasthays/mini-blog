import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { api } from '../../api'
import { CommentsModal } from '../comments-modal'

export const PostComments = ({ postId }) => {
  const [loading, setLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [commentsList, setCommentsList] = useState([])

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
    <div onClick={() => setIsOpen(!isOpen)}>
      <FontAwesomeIcon icon={faCommentAlt} />
      <span>{commentsList.length} comments </span>
      {isOpen && <CommentsModal />}
    </div>
  )
}
