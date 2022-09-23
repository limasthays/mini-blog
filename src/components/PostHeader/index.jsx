import { PostHeaderDiv } from './style'

export const PostHeader = ({ name, username }) => {
  return (
    <PostHeaderDiv>
      <span className="name">{name} </span>
      <span className="username">@{username}</span>
    </PostHeaderDiv>
  )
}
