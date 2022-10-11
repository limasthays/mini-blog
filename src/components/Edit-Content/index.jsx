import { useState } from 'react'
import { useEffect } from 'react'
import { api } from '../../api'
import { NewPostDiv } from '../NewPost/style'
import { Status } from '../Status'
import { PostButton } from '../button'
import { useForm } from 'react-hook-form'

export const EditContent = ({ post, setOpenEdit }) => {
  const [inputs, setInputs] = useState({
    title: '',
    body: '',
  })

  const [status, setStatus] = useState('')

  const { register, handleSubmit } = useForm()

  useEffect(() => {
    api
      .get(`/posts/${post.id}`)
      .then(({ data }) => {
        setInputs({ ...inputs, title: data.title, body: data.body })
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  const onChangeValue = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const onSubmit = (data) => {
    api
      .put(`/posts/${post.id}`, data)
      .then((res) => {
        console.log('resposta: ', res)
        setStatus(res.status.toString())
      })
      .catch((err) => console.error(err))
  }

  return (
    <NewPostDiv>
      <h3>edit your post here! :)</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="title"
          name="title"
          {...register('title')}
          onChange={(e) => {
            onChangeValue(e)
          }}
          value={inputs.title}
        />

        <textarea
          cols="30"
          rows="5"
          placeholder="your text goes here"
          {...register('body')}
          name="body"
          onChange={(e) => {
            onChangeValue(e)
          }}
          value={inputs.body}
        />

        <div className="status-footer">
          <Status status={status} />
          <PostButton type="submit" title="edit post!" />
        </div>
      </form>
    </NewPostDiv>
  )
}
