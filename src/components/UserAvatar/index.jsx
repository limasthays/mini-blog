import { StyledAvatar } from './style'

export const UserAvatar = ({ src }) => {
  return (
    <StyledAvatar>
      <img src={src} alt="user avatar" />
    </StyledAvatar>
  )
}
