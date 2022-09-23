import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'

export const PostComments = () => {
  return (
    <>
      <FontAwesomeIcon icon={faCommentAlt} /> <span> x comments </span>
    </>
  )
}
