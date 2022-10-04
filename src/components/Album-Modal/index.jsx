import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { AlbumModalContext } from '../../contexts/AlbumModalContext'
import { AlbumModalContainer } from './style'
import { useEffect } from 'react'
import { api } from '../../api'
import { useState } from 'react'
import { Carousel } from '../Carousel'
import { CarouselContextProvider } from '../../contexts/CarouselContext'

export const AlbumModal = ({ albumTitle, albumId }) => {
  const { setIsOpen } = useContext(AlbumModalContext)
  const [currentAlbum, setCurrentAlbum] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get('/photos')
      .then(({ data }) => {
        const filteredData = data.filter((item) => item.albumId === albumId)
        setCurrentAlbum(filteredData)
      })
      .catch((err) => {
        console.error(err)
      })

    setLoading(false)
  }, [])

  return (
    <AlbumModalContainer>
      <FontAwesomeIcon
        icon={faWindowClose}
        onClick={() => {
          setIsOpen(false)
        }}
      />
      <h2>{albumTitle}</h2>

      <CarouselContextProvider>
        {loading === false && <Carousel photos={currentAlbum} />}
      </CarouselContextProvider>
    </AlbumModalContainer>
  )
}
