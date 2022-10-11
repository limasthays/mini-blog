import { CommentDiv } from './style'
import { AvatarGenerator } from 'random-avatar-generator'

export const CommentWrapper = ({ name, email, comment }) => {
  const avatarGenerator = new AvatarGenerator()

  return (
    <CommentDiv>
      <div className="comment-header">
        <img src={avatarGenerator.generateRandomAvatar()} alt="" />
        <span className="random-name">{name}, </span>
        <span className="random-email"> {email}</span>
      </div>

      <p className="comment">{comment}</p>
    </CommentDiv>
  )
}
