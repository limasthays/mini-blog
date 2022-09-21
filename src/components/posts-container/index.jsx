import { PostsDiv } from './style'
import { PostWrapper } from '../post-wrapper'
import { nanoid } from 'nanoid'

const otherposts = [
  {
    name: 'Leanne Graham',
    username: 'Bret',
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    name: 'Leanne Graham',
    username: 'Bret',
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
]

export const PostsContainer = () => {
  return (
    <PostsDiv>
      {otherposts.map((item) => (
        <PostWrapper
          key={nanoid()}
          name={item.name}
          username={item.username}
          title={item.title}
          post={item.body}
        />
      ))}
    </PostsDiv>
  )
}
