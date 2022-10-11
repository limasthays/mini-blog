import { useEffect, useState } from 'react'
import { api } from '../../api'
import { CommentWrapper } from '../CommentWrapper'
import { CommentsSection } from './style'
import { nanoid } from 'nanoid'

export const Comments = ({ postId }) => {
  const [loading, setLoading] = useState(true)
  const [comments, setComments] = useState([])

  useEffect(() => {
    api
      .get(`/posts/${postId}/comments`)
      .then(({ data }) => {
        setComments(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <CommentsSection>
      <h3>comments</h3>
      <div className="comments-list">
        {loading === false &&
          comments.map((comment) => (
            <CommentWrapper
              key={nanoid()}
              name={comment.name}
              email={comment.email}
              comment={comment.body}
            />
          ))}
      </div>
    </CommentsSection>
  )
}
