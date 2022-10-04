import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CarouselContext } from '../../contexts/CarouselContext'
import { ButtonStyled } from './style'

export const ArrowLeftButton = () => {
  const { focusedPhotoId, setFocusedPhotoId } = useContext(CarouselContext)
  const handleClickLeft = (event) => {
    event.preventDefault()
    if (focusedPhotoId > 0) {
      setFocusedPhotoId(focusedPhotoId - 1)
    }
  }
  return (
    <ButtonStyled onClick={handleClickLeft}>
      <FontAwesomeIcon icon={faAngleLeft} />
    </ButtonStyled>
  )
}

export const ArrowRightButton = ({ arrayLength }) => {
  const { focusedPhotoId, setFocusedPhotoId } = useContext(CarouselContext)
  const handleClickRight = (event) => {
    event.preventDefault()
    if (focusedPhotoId < arrayLength - 1) {
      setFocusedPhotoId(focusedPhotoId + 1)
    }
  }
  return (
    <ButtonStyled onClick={handleClickRight}>
      <FontAwesomeIcon icon={faAngleRight} />
    </ButtonStyled>
  )
}
