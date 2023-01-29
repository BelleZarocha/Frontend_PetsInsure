import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, GridArea, ProfileBox } from "../StylesPages/PageLayout"
import './Profile.css'

function Profile() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
        const response = await axios.get('https://dull-blue-gorilla-shoe.cyclic.app/user/edit');
        setData(response.data);
    }
    fetchData();
    }, []);
    return (
        <Container>
            <GridArea>
                <ProfileBox>
                    <img src="https://drive.google.com/uc?id=1fyf7UZ-rJBZrRA5TR_UY6_-OMsazr1xf&authuser=0" style={{height: "80px", margin: "20px"}} />
                    {data.map(item => (
                    <div key={item.id}> 
                        <h2>Username: {item.username}</h2>
                        
                        <div style={{fontSize: "20px"}}>
                        
                        
                        </div>
                    </div>
                    ))}
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
