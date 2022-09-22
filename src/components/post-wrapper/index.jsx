import { SinglePostDiv } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { api } from '../../api'

export const PostWrapper = ({
  name,
  username,
  title,
  post,
  postId,
  onClick,
}) => {
  const comments = []

  useEffect(() => {
    api.get(`posts/${postId}/comments`).then((res) => {
      comments.push(...res.data)
    })
  })
  return (
    <SinglePostDiv>
      <div className="image"></div>

      <div className="post-content">
        <span className="name">{name} </span>
        <span className="username"> @{username}</span>

        <div onClick={onClick}>
          <p className="title">{title}</p>
          <p className="text-post">{post}</p>

          <FontAwesomeIcon icon={faCommentAlt} />
          <span>{comments.length} comments</span>
        </div>
      </div>
    </SinglePostDiv>
  )
}
