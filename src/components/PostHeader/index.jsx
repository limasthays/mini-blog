import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserIdContext } from '../../contexts/UserIdContext'
import { PostHeaderDiv } from './style'

export const PostHeader = ({ name, username, id }) => {
  const { setUserId } = useContext(UserIdContext)

  const history = useHistory()

  return (
    <PostHeaderDiv
      onClick={() => {
        setUserId(id)
        history.push(`/profile/${id}`)
      }}
    >
      <span className="name">{name} </span>
      <span className="username">@{username}</span>
    </PostHeaderDiv>
  )
}
