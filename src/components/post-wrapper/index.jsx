import { SinglePostDiv } from './style'

export const PostWrapper = ({ children }) => {
  return (
    <SinglePostDiv>
      <div className="image"></div>
      {children}
    </SinglePostDiv>
  )
}
