import { AvatarGenerator } from 'random-avatar-generator'
import { AvatarDiv } from './style'

export const AvatarBox = ({ dataList }) => {
  const generator = new AvatarGenerator()
  const { name, username, address } = dataList

  return (
    <AvatarDiv>
      <img src={generator.generateRandomAvatar()} alt="user avatar" />
      <div>
        <h2>{name}</h2>
        <span className="username">@{username}</span>
        <span>from {address?.city}</span>
      </div>
    </AvatarDiv>
  )
}
