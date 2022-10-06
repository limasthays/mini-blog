import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserIdContext } from '../../contexts/UserIdContext'
import { PostHeaderDiv } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { TabPostsAction } from '../Tab-Post-Actions'

export const PostHeader = ({ name, username, id, post }) => {
  const { setUserId } = useContext(UserIdContext)
  const [openTab, setOpenTab] = useState(false)

  const history = useHistory()

  return (
    <PostHeaderDiv>
      <div
        onClick={() => {
          setUserId(id)
          history.push(`/profile/${id}`)
        }}
        className="post-header"
      >
        <span className="name">{name} </span>
        <span className="username">@{username}</span>
      </div>

      <div className="actions">
        <FontAwesomeIcon
          icon={faEllipsisH}
          onClick={() => {
            setOpenTab(!openTab)
          }}
          className="elipsis"
        />
        {openTab && <TabPostsAction post={post} />}
      </div>
    </PostHeaderDiv>
  )
}
