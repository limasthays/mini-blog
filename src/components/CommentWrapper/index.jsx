import { CommentDiv } from './style'
import { AvatarGenerator } from 'random-avatar-generator'

export const CommentWrapper = ({ name, email, comment }) => {
  const avatarGenerator = new AvatarGenerator()

  return (
    <CommentDiv>
      <img src={avatarGenerator.generateRandomAvatar()} alt="" />
      <div>
        <span className="random-name">{name}</span>
        <span className="random-email">{email}</span>
        <p className="comment">{comment}</p>
      </div>
    </CommentDiv>
  )
}
