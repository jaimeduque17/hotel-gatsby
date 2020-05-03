import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import ImageHotel from '../components/imageHotel'
import ContentHome from '../components/contentHome'
import RoomPreview from '../components/roomReview'
import UseRooms from '../hooks/use-rooms'

const IndexPage = () => {

  const rooms = UseRooms()

  console.log(rooms)

  return (
    <Layout>
      <ImageHotel />
      <ContentHome />
      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >Our Rooms</h2>
      <ul>
        {rooms.map(room => (
          <RoomPreview 
            key={room.id}
            room={room}
          />
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
