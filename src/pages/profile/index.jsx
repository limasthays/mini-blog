import { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { api } from '../../api'
import { AvatarBox } from '../../components/Avatar-box'
import { MainContainer } from '../../components/main-container/style'
import { ProfileTabs } from '../../components/Profile-tabs'
import { UserIdContext } from '../../contexts/UserIdContext'

export const Profile = () => {
  const { id } = useParams()
  const [userData, setUserData] = useState({})
  const [userPosts, setUserPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const history = useHistory()

  useEffect(() => {
    api
      .get(`/users/${id}`)
      .then(({ data }) => {
        setUserData(data)

        api
          .get('/posts')
          .then(({ data }) => {
            const filteredPosts = data.filter(
              (post) => post.userId.toString() === id
            )
            setUserPosts(filteredPosts)
          })
          .catch((err) => {
            console.error(err)
          })
      })
      .catch((err) => {
        console.error(err)
        history.push('/notfound')
      })
    setLoading(false)
  }, [])

  return loading ? (
    <>loading...</>
  ) : (
    <MainContainer>
      <AvatarBox dataList={userData} />
      <ProfileTabs />
    </MainContainer>
  )
}
