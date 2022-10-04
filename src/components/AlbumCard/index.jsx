import { useContext } from 'react'
import { AlbumModalContext } from '../../contexts/AlbumModalContext'
import { AlbumModal } from '../Album-Modal'
import { AlbumCardDiv } from './style'

export const AlbumCard = ({ item, currAlbum, setCurrAlbum }) => {
  const { title, id } = item

  const { isOpen, setIsOpen } = useContext(AlbumModalContext)

  return (
    <>
      <AlbumCardDiv
        onClick={() => {
          setIsOpen(true)
          setCurrAlbum(id)
        }}
      >
        <div className="square" />
        <h3>{title}</h3>
      </AlbumCardDiv>

      {isOpen && currAlbum === id && (
        <AlbumModal albumTitle={title} albumId={id} />
      )}
    </>
  )
}
