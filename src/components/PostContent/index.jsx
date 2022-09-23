import { PostContentStyle } from './style'

export const PostContent = ({ title, post }) => {
  return (
    <PostContentStyle>
      <p className="title">{title}</p>
      <p className="post">{post}</p>
    </PostContentStyle>
  )
}
