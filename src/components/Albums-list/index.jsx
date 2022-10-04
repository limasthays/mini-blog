import { AlbumCard } from '../AlbumCard'
import { nanoid } from 'nanoid'
import { useState } from 'react'

export const AlbumsList = ({ list }) => {
  const [currAlbum, setCurrAlbum] = useState(0)
  return (
    <>
      {list.map((item) => (
        <AlbumCard
          key={nanoid()}
          item={item}
          currAlbum={currAlbum}
          setCurrAlbum={setCurrAlbum}
        />
      ))}
    </>
  )
}
