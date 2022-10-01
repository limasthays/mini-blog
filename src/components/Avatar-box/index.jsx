import { AvatarDiv } from './style'

export const AvatarBox = ({ dataList, avatar }) => {
  const { name, username, address } = dataList

  return (
    <AvatarDiv>
      <img src={avatar} alt="user avatar" />
      <div>
        <h2>{name}</h2>
        <span className="username">@{username}</span>
        <span>from {address?.city}</span>
      </div>
    </AvatarDiv>
  )
}
