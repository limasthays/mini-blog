import { useContext } from 'react'
import { CarouselContext } from '../../contexts/CarouselContext'

import { ArrowLeftButton, ArrowRightButton } from '../Arrow-Buttons'
import { FocusedDiv } from './styles'

export const FocusedPhoto = ({ photos }) => {
  const { focusedPhotoId } = useContext(CarouselContext)
  return (
    <FocusedDiv>
      <ArrowLeftButton />

      <div>
        <img
          src={photos[focusedPhotoId]?.url}
          alt="colorful pattern"
          className="focused-photo"
        />
        <p>{photos[focusedPhotoId]?.title}</p>
      </div>

      <ArrowRightButton arrayLength={photos.length} />
    </FocusedDiv>
  )
}
