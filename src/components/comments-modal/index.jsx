import { StyledCommmentsModal } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { ModalCommentsContext } from '../../contexts/ModalContext'
import { useContext } from 'react'

export const CommentsModal = () => {
  const { setIsOpen } = useContext(ModalCommentsContext)

  return (
    <StyledCommmentsModal>
      <FontAwesomeIcon
        icon={faWindowClose}
        onClick={() => {
          setIsOpen(false)
        }}
      />
    </StyledCommmentsModal>
  )
}
