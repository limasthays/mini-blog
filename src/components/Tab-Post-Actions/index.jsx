import { TabPost } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { EditModal } from '../Edit-Modal'
import { DeleteModal } from '../DeleteModal'

export const TabPostsAction = ({ post }) => {
  const [opendEdit, setOpenEdit] = useState(false)
  const [opendDelete, setOpenDelete] = useState(false)
  return (
    <>
      <TabPost>
        <div
          onClick={() => {
            setOpenEdit(true)
          }}
        >
          <FontAwesomeIcon icon={faEdit} />
          <span>Edit post</span>
        </div>

        {opendEdit && <EditModal post={post} setOpenEdit={setOpenEdit} />}

        <div
          onClick={() => {
            setOpenDelete(true)
          }}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
          <span>Delete post</span>
        </div>

        {opendDelete && (
          <DeleteModal post={post} setOpenDelete={setOpenDelete} />
        )}
      </TabPost>
    </>
  )
}
