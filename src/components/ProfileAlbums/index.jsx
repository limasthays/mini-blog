import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api'
import { AlbumsList } from '../Albums-list'
import { nanoid } from 'nanoid'

export const ProfileAlbums = () => {
  const { id } = useParams()
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get('/albums')
      .then(({ data }) => {
        const filtered = data.filter((item) => item.userId.toString() === id)

        setAlbums(filtered)
      })
      .catch((err) => {
        console.error(err)
      })
    setLoading(false)
  }, [])

  return <>{!loading && <AlbumsList key={nanoid()} list={albums} />}</>
}
