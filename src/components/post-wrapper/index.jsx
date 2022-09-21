import { SinglePostDiv } from './style'

export const PostWrapper = ({ name, username, title, post }) => {
  return (
    <SinglePostDiv>
      <div className="image"></div>

      <div className="post-content">
        <span className="name">{name} </span>
        <span className="username"> @{username}</span>

        <p className="title">{title}</p>
        <p className="text-post">{post}</p>
      </div>
    </SinglePostDiv>
  )
}
