import { PostButton } from '../button'
import { NewPostDiv } from './style'

export const NewPost = () => {
  return (
    <NewPostDiv>
      <h2>what happened to you?</h2>
      <input type="text" placeholder="title" id="post-title" />
      <textarea cols="30" rows="5" placeholder="your text goes here"></textarea>

      <PostButton title="post!" />
    </NewPostDiv>
  )
}
