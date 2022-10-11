import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { DeleteModalDiv } from './style'
import { api } from '../../api'
import { useState } from 'react'

export const DeleteModal = ({ post, setOpenDelete }) => {
  const { id } = post
  const [status, setStatus] = useState('')

  const actionDelete = () => {
    api.delete(`/posts/${id}`).then((res) => {
      console.log('response: ', res)
      setStatus(res.status.toString())
    })
  }

  return (
    <DeleteModalDiv>
      <div className="delete">
        <FontAwesomeIcon
          icon={faWindowClose}
          onClick={() => {
            setOpenDelete(false)
          }}
        />
        <span>Are you sure you want to delete this post?</span>

        <div className="buttons">
          <button
            onClick={() => {
              actionDelete()
            }}
          >
            delete!
          </button>

          <button
            onClick={() => {
              setOpenDelete(false)
            }}
          >
            nevermind, cancel
          </button>
        </div>

        {status === '200' ? (
          <span>{status} status, your post was deleted</span>
        ) : (
          status && <span>{status} status</span>
        )}
      </div>
    </DeleteModalDiv>
  )
}
