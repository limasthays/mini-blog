import { MainContainer } from '../../components/main-container/style'
import { NewPost } from '../../components/NewPost'
import { PostsContainer } from '../../components/posts-container'

export const Homepage = () => {
  return (
    <>
      <MainContainer>
        <NewPost />
        <PostsContainer />
      </MainContainer>
    </>
  )
}
