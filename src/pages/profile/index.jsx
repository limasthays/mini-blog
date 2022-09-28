import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api'
import { MainContainer } from '../../components/main-container/style'
import { UserIdContext } from '../../contexts/UserIdContext'

export const Profile = () => {
  const { userId, setUserId } = useContext(UserIdContext)
  const [loading, setLoading] = useState(true)
  let { id } = useParams()
  const [userData, setUserData] = useState()
  const [userPosts, setUserPosts] = useState()

  useEffect(() => {
    api
      .get('/users')
      .then(({ data }) => {
        const foundedUser = data.find((user) => user.id === userId)
        setUserData(foundedUser)

        api
          .get('/posts')
          .then(({ data }) => {
            const filteredPosts = data.filter((post) => post.userId === userId)
            setUserPosts(filteredPosts)
          })
          .catch((err) => {
            console.error(err)
          })
      })
      .catch((err) => {
        console.error(err)
      })
    setLoading(false)
  }, [])

  return (
    <MainContainer>
      {console.log('user data: ', userData)}
      {loading ? (
        <>loading...</>
      ) : (
        <>
          <h1>o user id é: {userId}</h1>
          <h2>nome do user: fulano</h2>
        </>
      )}
    </MainContainer>
  )
}
