import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { EditModalDiv } from './style'
import { EditContent } from '../Edit-Content'

export const EditModal = ({ setOpenEdit, post }) => {
  return (
    <EditModalDiv>
      <div className="edit-container">
        <FontAwesomeIcon
          icon={faWindowClose}
          onClick={() => {
            setOpenEdit(false)
          }}
        />

        <EditContent post={post} setOpenEdit={setOpenEdit} />
      </div>
    </EditModalDiv>
  )
}
