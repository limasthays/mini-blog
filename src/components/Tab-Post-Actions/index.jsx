import { TabPost } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export const TabPostsAction = ({ post }) => {
  return (
    <>
      <TabPost>
        <div>
          <FontAwesomeIcon icon={faEdit} />
          <span>Edit post</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faTrashAlt} />
          <span>Delete post</span>
        </div>
      </TabPost>
    </>
  )
}
