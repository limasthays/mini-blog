import { StyledCarousel } from './style'
import { nanoid } from 'nanoid'

export const Carousel = ({ photos }) => {
  return (
    <StyledCarousel>
      <div className="open-album">
        {photos.map(({ thumbnailUrl }) => {
          return <img key={nanoid()} src={thumbnailUrl} alt="" />
        })}
      </div>
    </StyledCarousel>
  )
}
