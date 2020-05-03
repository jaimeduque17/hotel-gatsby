import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import ImageHotel from '../components/imageHotel'
import ContentHome from '../components/contentHome'
import RoomPreview from '../components/roomReview'
import UseRooms from '../hooks/use-rooms'

const RoomList = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
}
`

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
      <RoomList>
        {rooms.map(room => (
          <RoomPreview 
            key={room.id}
            room={room}
          />
        ))}
      </RoomList>
    </Layout>
  )
}

export default IndexPage
