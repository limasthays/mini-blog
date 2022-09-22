import { PostsDiv } from './style'
import { useContext, useEffect, useState } from 'react'
import { PostWrapper } from '../post-wrapper'
import { nanoid } from 'nanoid'
import { api } from '../../api'
import { PostHeader } from '../Post-Header'
import { PostContent } from '../Post-Content'
import { CommentsModal } from '../comments-modal'
import { ModalCommentsContext } from '../../contexts/ModalContext'

const posts = []
const users = []

export const PostsContainer = () => {
  const [loading, setLoading] = useState(true)
  const { isOpen, setIsOpen } = useContext(ModalCommentsContext)

  useEffect(() => {
    api
      .get('/posts')
      .then((res) => {
        posts.push(...res.data)
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      })

    api
      .get('/users')
      .then((res) => {
        users.push(...res.data)
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <PostsDiv>
      {posts.map((post) => {
        let filtered = users.find((user) => post.userId === user.id)
        let { name, username } = filtered

        return (
          !loading && (
            <PostWrapper key={nanoid()}>
              <div>
                <PostHeader
                  key={nanoid()}
                  name={name}
                  username={username}
                  onClick={() => {
                    console.log('aqui vai ficar o clique do perfil')
                  }}
                />
                <PostContent
                  key={nanoid()}
                  title={post.title}
                  post={post.body}
                  onClick={() => {
                    setIsOpen(!isOpen)
                  }}
                />

                {isOpen && <CommentsModal />}
              </div>
            </PostWrapper>
          )
        )
      })}
    </PostsDiv>
  )
}
