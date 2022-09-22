import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'

export const PostContent = ({ title, post, onClick }) => {
  return (
    <div className="post-content" onClick={onClick}>
      <p className="title">{title}</p>
      <p className="text-post">{post}</p>

      <FontAwesomeIcon icon={faCommentAlt} />
      <span>x comments</span>
    </div>
  )
}
