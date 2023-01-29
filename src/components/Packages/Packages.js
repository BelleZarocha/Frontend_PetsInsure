import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, StyledBox, StyledName, DescriptTxt, CardHeader, Detail, IconFilter, Topic, Flexarea } from "../StylesPages/PageLayout"
import { FaShieldAlt , FaDog, FaCat, FaMoneyBillWave} from 'react-icons/fa';
import { MdPets} from 'react-icons/md';
import './Packages.css'

function Packages() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:8000/packages');
      setData(response.data);
    }
    fetchData();
  }, []);

 
  return (
    <Container>
      <Topic>Pets Insurance Package</Topic>
      <div style={{background:"#2a9d8f", height:"4px", width:"100%", margin:"0 auto", marginBottom:"10px"}}/>
      <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", margin: "30px", justifyContent:"center", alignItems: "center"}}>
				<IconFilter><FaDog className="petIcon" /></IconFilter>
				<IconFilter><FaCat className="petIcon" /></IconFilter>
				<IconFilter><MdPets className="petIcon" /></IconFilter>
			</div>
			<Flexarea>
        {data.map(item => (
          <StyledBox key={item.id}>
            <CardHeader>
              <StyledName>{item.name}</StyledName>
            </CardHeader>
            <div style={{fontSize: "20px"}}>
              <FaMoneyBillWave /> {item.cost} Baht/Year<br />
              <FaShieldAlt /> {item.description} <br />
            </div>
            <Detail>
              <DescriptTxt>
                <p style={{lineHeight: "20px", fontSize: "12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </DescriptTxt>
				    </Detail>
            <button>Buy</button>
            
          </StyledBox>
        ))}
      </Flexarea>
      
      
    </Container>
  );
}

export default Packages;