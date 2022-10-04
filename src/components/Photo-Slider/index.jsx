import { SliderStyle } from './style'
import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { CarouselContext } from '../../contexts/CarouselContext'

export const PhotoSlider = ({ photos }) => {
  const { setFocusedPhotoId } = useContext(CarouselContext)

  return (
    <SliderStyle>
      {photos?.map((item) => {
        return (
          <img
            src={item.thumbnailUrl}
            key={nanoid()}
            alt="thumbnail colorful pattern"
            onClick={() => {
              const foundnumber = photos.findIndex((el) => el.id === item.id)
              console.log('found number: ', foundnumber)
              setFocusedPhotoId(foundnumber)
            }}
          />
        )
      })}
    </SliderStyle>
  )
}
