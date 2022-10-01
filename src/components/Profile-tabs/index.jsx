import { useState } from 'react'
import { ProfileAlbums } from '../ProfileAlbums'
import { ProfilePostsBox } from '../ProfilePostsBox'
import { NavTabs } from './style'

export const ProfileTabs = ({ postsList, userData, avatar }) => {
  const [activeTab, setActiveTab] = useState('posts')

  return (
    <>
      <NavTabs>
        <ul>
          <li>
            <input
              type="radio"
              id="posts"
              className="radio-tab"
              name="tabs"
              defaultChecked
            />
            <label
              htmlFor="posts"
              onClick={() => {
                setActiveTab('posts')
              }}
            >
              posts
            </label>
          </li>

          <li>
            <input type="radio" id="albums" className="radio-tab" name="tabs" />
            <label
              htmlFor="albums"
              onClick={() => {
                setActiveTab('albums')
              }}
            >
              albums
            </label>
          </li>
        </ul>
      </NavTabs>
      {activeTab === 'posts' && (
        <ProfilePostsBox
          posts={postsList}
          userData={userData}
          avatar={avatar}
        />
      )}
      {activeTab === 'albums' && <ProfileAlbums />}
    </>
  )
}
