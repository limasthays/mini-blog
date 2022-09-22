import { StyledCommmentsModal } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { ModalCommentsContext } from '../../contexts/ModalContext'

export const CommentsModal = () => {
  const { setIsOpen } = useContext(ModalCommentsContext)

  return (
    <StyledCommmentsModal>
      <FontAwesomeIcon icon={faWindowClose} onClick={() => setIsOpen(false)} />
    </StyledCommmentsModal>
  )
}
