import { CarouselStyle } from './style'
import { FocusedPhoto } from '../Focused-Photo'
import { PhotoSlider } from '../Photo-Slider'

export const Carousel = ({ photos }) => {
  return (
    <CarouselStyle>
      <FocusedPhoto photos={photos} />
      <PhotoSlider photos={photos} />
    </CarouselStyle>
  )
}
