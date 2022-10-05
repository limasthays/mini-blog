import { PostButton } from '../button'
import { NewPostDiv } from './style'
import { useForm } from 'react-hook-form'
import { api } from '../../api'
import { useState } from 'react'

export const NewPost = () => {
  const [inputs, setInputs] = useState({
    title: '',
    body: '',
  })

  const onChangeValue = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    api
      .post('/posts', data)
      .then((res) => {
        console.log('resposta: ', res)
      })
      .catch((err) => console.log(err))

    setInputs({
      title: '',
      body: '',
    })
  }

  return (
    <NewPostDiv>
      <h2>what happened to you?</h2>

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

        <PostButton type="submit" title="post!" />
      </form>
    </NewPostDiv>
  )
}
