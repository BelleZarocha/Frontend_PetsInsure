import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, StyledBox, StyledName, DescriptTxt, CardHeader, Detail, IconFilter, Topic, Flexarea } from "../StylesPages/PageLayout"
import { FaShieldAlt , FaDog, FaCat, FaMoneyBillWave} from 'react-icons/fa';
import { MdPets} from 'react-icons/md';
import './Packages.css'
import swal from 'sweetalert';

function Packages() {
  function showQR() {
		swal({
			title: "QR code",
			text: "please make a payment",
			icon: "https://drive.google.com/uc?id=10VtyEA9RD2Edn7yg-Qr7Srkr1EFS_v-9&authuser=0",
			buttons: {
				visible: false
			}
		  })
	}

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
            <button onClick={()=>{
                console.log(item.id)
                axios
                    .put("https://dull-blue-gorilla-shoe.cyclic.app/packages/buypack",
                        {
                            package_id: item.id
                        },
                        {
                            headers: {Authorization: `Bearer ${localStorage.getItem("jwt")}`},
                        }
                    )
                    .then((response) => {

                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
            }><label onClick={showQR}>Buy</label></button>
            
          </StyledBox>
        ))}
      </Flexarea>
      
      
    </Container>
  );
}

export default Packages;