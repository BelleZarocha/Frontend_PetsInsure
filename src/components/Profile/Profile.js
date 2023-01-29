import React from 'react'
import { Container, GridArea, ProfileBox } from "../StylesPages/PageLayout"
import './Profile.css'

function Profile() {
  return (
    <Container>
        <GridArea>
            <ProfileBox>
                <img src="https://drive.google.com/uc?id=1fyf7UZ-rJBZrRA5TR_UY6_-OMsazr1xf&authuser=0" style={{height: "80px", margin: "20px"}} />
            </ProfileBox>

            <ProfileBox>

            </ProfileBox>
        </GridArea>
        <div style={{display: "flex", justifyContent: "center"}}>
            <a href="/edit_profile" className='editBtn'>Edit Profile</a>
        </div>
    </Container>
  )
}

export default Profile
