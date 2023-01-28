import "../StylesPages/ShowList.css"
import { Container, StyledBox, StyledName, DescriptTxt, CardHeader, Detail, IconFilter, Topic} from "../StylesPages/PageLayout"
import { FaShieldAlt , FaDog, FaCat} from 'react-icons/fa';
import { MdPets} from 'react-icons/md';
import "./Packages.css";
import React, { useState } from 'react';
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
		  });
	}

	const [catState, setCatState] = useState('all')
	// const eles = [pk_ele, pk_ele_dog]

	function handleDog() {
		setCatState('dog')
	}
	function handleCat() {
		setCatState('cat')
	}
	function handleExotic() {
		setCatState('exotic')
	}
	
	const PKELE = () => {
		return (
			<>
	      <Container>
			<Topic>Pets Insurance Package</Topic>
			<div style={{background:"#2a9d8f", height:"4px", width:"95%", margin:"0 auto", marginBottom:"10px"}}/>
	
			<div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", margin: "30px", justifyContent:"center", alignItems: "center"}}>
				<IconFilter><FaDog className="petIcon" onClick={handleDog}/></IconFilter>
				<IconFilter><FaCat className="petIcon" onClick={handleCat}/></IconFilter>
				<IconFilter><MdPets className="petIcon" onClick={handleExotic}/></IconFilter>
			</div>
			<div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
			<StyledBox>
				<CardHeader>
					<StyledName>Normal Package</StyledName>
				</CardHeader>
				<Detail>
					<DescriptTxt>
						<FaShieldAlt /> Premium/Year : 1,500 Baht <br />
						<FaShieldAlt /> Premium/Quater : 450 Baht <br />
						<FaShieldAlt /> Layout Limit : 15,000 Baht <br />
					</DescriptTxt>
				</Detail>
				<button onClick={showQR}>Buy</button>
			</StyledBox>
			<StyledBox>
				<CardHeader>
					<StyledName>Lovely Package</StyledName>
				</CardHeader>
				<Detail>
					<DescriptTxt>
						<FaShieldAlt /> Premium/Year : 4,000 Baht <br />
						<FaShieldAlt /> Premium/Quater : 1,050 Baht <br />
						<FaShieldAlt /> Layout Limit : 40,000 Baht <br />
					</DescriptTxt>
				</Detail>
				<button onClick={showQR}>Buy</button>
			</StyledBox>
			<StyledBox>
				<CardHeader>
					<StyledName>Special Package</StyledName>
				</CardHeader>
				<Detail>
					<DescriptTxt>
						<FaShieldAlt /> Premium/Year : 9,500 Baht <br />
						<FaShieldAlt /> Premium/Quater : 2,500 Baht <br />
						<FaShieldAlt /> Layout Limit : 95,000 Baht <br />
					</DescriptTxt>
				</Detail>
				<button onClick={showQR}>Buy</button>
			</StyledBox>
			<StyledBox>
				<CardHeader>
					<StyledName>Cats Cover Package</StyledName>
				</CardHeader>
				<Detail>
					<DescriptTxt>
						<FaShieldAlt /> Premium/Year : 5,500 Baht <br />
						<FaShieldAlt /> Premium/Quater : 1,500 Baht <br />
						<FaShieldAlt /> Layout Limit : 50,000 Baht <br />
					</DescriptTxt>
				</Detail>
				<button onClick={showQR}>Buy</button>
			</StyledBox>
			<StyledBox>
				<CardHeader>
					<StyledName>Dog Cover Package</StyledName>
				</CardHeader>
				<Detail>
					<DescriptTxt>
						<FaShieldAlt /> Premium/Year : 5,500 Baht <br />
						<FaShieldAlt /> Premium/Quater : 1,500 Baht <br />
						<FaShieldAlt /> Layout Limit : 50,000 Baht <br />
					</DescriptTxt>
				</Detail>
				<button onClick={showQR}>Buy</button>
			</StyledBox>
			<StyledBox>
				<CardHeader>
					<StyledName>Exotic Package</StyledName>
				</CardHeader>
				<Detail>
					<DescriptTxt>
						<FaShieldAlt /> Premium/Year : 4,000 Baht <br />
						<FaShieldAlt /> Premium/Quater : 1,050 Baht <br />
						<FaShieldAlt /> Layout Limit : 40,000 Baht <br />
					</DescriptTxt>
				</Detail>
				<button onClick={showQR}>Buy</button>
			</StyledBox>
			</div>
		  </Container>
		  
	    </>
		)
	}  


	const PKELEDOG = () => {
		return (
			<>
			  <Container>
				<Topic>Pets Insurance Package</Topic>
				<div style={{background:"#2a9d8f", height:"4px", width:"95%", margin:"0 auto", marginBottom:"10px"}}/>
		
				<div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", margin: "30px", justifyContent:"center", alignItems: "center"}}>
				<IconFilter><FaDog className="petIcon" onClick={handleDog}/></IconFilter>
				<IconFilter><FaCat className="petIcon" onClick={handleCat}/></IconFilter>
				<IconFilter><MdPets className="petIcon" onClick={handleExotic}/></IconFilter>
				</div>
				<div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
				<StyledBox>
					<CardHeader>
						<StyledName>Normal Package</StyledName>
					</CardHeader>
					<Detail>
						<DescriptTxt>
							<FaShieldAlt /> Premium/Year : 1,500 Baht <br />
							<FaShieldAlt /> Premium/Quater : 450 Baht <br />
							<FaShieldAlt /> Layout Limit : 15,000 Baht <br />
						</DescriptTxt>
					</Detail>
					<button onClick={showQR}>Buy</button>
				</StyledBox>
				<StyledBox>
					<CardHeader>
						<StyledName>Lovely Package</StyledName>
					</CardHeader>
					<Detail>
						<DescriptTxt>
							<FaShieldAlt /> Premium/Year : 4,000 Baht <br />
							<FaShieldAlt /> Premium/Quater : 1,050 Baht <br />
							<FaShieldAlt /> Layout Limit : 40,000 Baht <br />
						</DescriptTxt>
					</Detail>
					<button onClick={showQR}>Buy</button>
				</StyledBox>
	
	
				<StyledBox>
					<CardHeader>
						<StyledName>Dog Cover Package</StyledName>
					</CardHeader>
					<Detail>
						<DescriptTxt>
							<FaShieldAlt /> Premium/Year : 5,500 Baht <br />
							<FaShieldAlt /> Premium/Quater : 1,5000 Baht <br />
							<FaShieldAlt /> Layout Limit : 50,000 Baht <br />
						</DescriptTxt>
					</Detail>
					<button onClick={showQR}>Buy</button>
				</StyledBox>
	
				</div>
			  </Container>
			  
			</>
		  );  
	}

	const PKELECAT = () => {
		return (
			    <>
			      <Container>
					<Topic>Pets Insurance Package</Topic>
					<div style={{background:"#2a9d8f", height:"4px", width:"95%", margin:"0 auto", marginBottom:"10px"}}/>
			
					<div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", margin: "30px", justifyContent:"center", alignItems: "center"}}>
					<IconFilter><FaDog className="petIcon" onClick={handleDog}/></IconFilter>
					<IconFilter><FaCat className="petIcon" onClick={handleCat}/></IconFilter>
					<IconFilter><MdPets className="petIcon" onClick={handleExotic}/></IconFilter>
					</div>
					<div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
					<StyledBox>
						<CardHeader>
							<StyledName>Cats Cover Package</StyledName>
						</CardHeader>
						<Detail>
							<DescriptTxt>
								<FaShieldAlt /> Premium/Year : 5,500 Baht <br />
								<FaShieldAlt /> Premium/Quater : 1,5000 Baht <br />
								<FaShieldAlt /> Layout Limit : 50,000 Baht <br />
							</DescriptTxt>
						</Detail>
						<button onClick={showQR}>Buy</button>
					</StyledBox>
					<StyledBox>
						<CardHeader>
							<StyledName>Normal Package</StyledName>
						</CardHeader>
						<Detail>
							<DescriptTxt>
								<FaShieldAlt /> Premium/Year : 1,500 Baht <br />
								<FaShieldAlt /> Premium/Quater : 450 Baht <br />
								<FaShieldAlt /> Layout Limit : 15,000 Baht <br />
							</DescriptTxt>
						</Detail>
						<button onClick={showQR}>Buy</button>
					</StyledBox>
					<StyledBox>
						<CardHeader>
							<StyledName>Lovely Package</StyledName>
						</CardHeader>
						<Detail>
							<DescriptTxt>
								<FaShieldAlt /> Premium/Year : 4,000 Baht <br />
								<FaShieldAlt /> Premium/Quater : 1,050 Baht <br />
								<FaShieldAlt /> Layout Limit : 40,000 Baht <br />
							</DescriptTxt>
						</Detail>
						<button onClick={showQR}>Buy</button>
					</StyledBox>
					</div>
				  </Container>
				  
			    </>
			  );
	}

	const PKELEEXOTIC = () => {
		return (
			    <>
			      <Container>
					<Topic>Pets Insurance Package</Topic>
					<div style={{background:"#2a9d8f", height:"4px", width:"95%", margin:"0 auto", marginBottom:"10px"}}/>
			
					<div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", margin: "30px", justifyContent:"center", alignItems: "center"}}>
					<IconFilter><FaDog className="petIcon" onClick={handleDog}/></IconFilter>
				<IconFilter><FaCat className="petIcon" onClick={handleCat}/></IconFilter>
				<IconFilter><MdPets className="petIcon" onClick={handleExotic}/></IconFilter>
					</div>
					<div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
					<StyledBox>
						<CardHeader>
							<StyledName>Normal Package</StyledName>
						</CardHeader>
						<Detail>
							<DescriptTxt>
								<FaShieldAlt /> Premium/Year : 1,500 Baht <br />
								<FaShieldAlt /> Premium/Quater : 450 Baht <br />
								<FaShieldAlt /> Layout Limit : 15,000 Baht <br />
							</DescriptTxt>
						</Detail>
						<button onClick={showQR}>Buy</button>
					</StyledBox>
					<StyledBox>
						<CardHeader>
							<StyledName>Lovely Package</StyledName>
						</CardHeader>
						<Detail>
							<DescriptTxt>
								<FaShieldAlt /> Premium/Year : 4,000 Baht <br />
								<FaShieldAlt /> Premium/Quater : 1,050 Baht <br />
								<FaShieldAlt /> Layout Limit : 40,000 Baht <br />
							</DescriptTxt>
						</Detail>
						<button onClick={showQR}>Buy</button>
					</StyledBox>
					<StyledBox>
						<CardHeader>
							<StyledName>Special Package</StyledName>
						</CardHeader>
						<Detail>
							<DescriptTxt>
								<FaShieldAlt /> Premium/Year : 9,500 Baht <br />
								<FaShieldAlt /> Premium/Quater : 2,500 Baht <br />
								<FaShieldAlt /> Layout Limit : 95,000 Baht <br />
							</DescriptTxt>
						</Detail>
						<button onClick={showQR}>Buy</button>
					</StyledBox>
					<StyledBox>
						<CardHeader>
							<StyledName>Exotic Package</StyledName>
						</CardHeader>
						<Detail>
							<DescriptTxt>
								<FaShieldAlt /> Premium/Year : 4,000 Baht <br />
								<FaShieldAlt /> Premium/Quater : 1,050 Baht <br />
								<FaShieldAlt /> Layout Limit : 40,000 Baht <br />
							</DescriptTxt>
						</Detail>
						<button onClick={showQR}>Buy</button>
					</StyledBox>
					</div>
				  </Container>
				  
			    </>
			  );
	}
	
	let ret = <PKELE/>
	if (catState === 'all') ret = <PKELE/>
	else if (catState === 'dog') ret = <PKELEDOG/>
	else if (catState === 'cat') ret = <PKELECAT/>
	else if (catState === 'exotic') ret = <PKELEEXOTIC/>
	return ret;




	// return catState === 'all' ? <PKELE />: <PKELEDOG/>
//     return (
//     <>
//       <Container>
// 		<Topic>Pets Insurance Package</Topic>
// 		<div style={{background:"#2a9d8f", height:"4px", width:"95%", margin:"0 auto", marginBottom:"10px"}}/>

// 		<div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", margin: "30px", justifyContent:"center", alignItems: "center"}}>
// 			<IconFilter><FaDog className="petIcon" onClick={handleDog}/></IconFilter>
// 			<IconFilter><FaCat className="petIcon" /></IconFilter>
// 			<IconFilter><MdPets className="petIcon" /></IconFilter>
// 		</div>
// 		<div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
// 		<StyledBox>
// 			<CardHeader>
// 				<StyledName>Normal Package</StyledName>
// 			</CardHeader>
// 			<Detail>
// 				<DescriptTxt>
// 					<FaShieldAlt /> Premium/Year : 1,500 Baht <br />
// 					<FaShieldAlt /> Premium/Quater : 450 Baht <br />
// 					<FaShieldAlt /> Layout Limit : 15,000 Baht <br />
// 				</DescriptTxt>
// 			</Detail>
// 			<button>Buy</button>
// 		</StyledBox>
// 		<StyledBox>
// 			<CardHeader>
// 				<StyledName>Lovely Package</StyledName>
// 			</CardHeader>
// 			<Detail>
// 				<DescriptTxt>
// 					<FaShieldAlt /> Premium/Year : 4,000 Baht <br />
// 					<FaShieldAlt /> Premium/Quater : 1,050 Baht <br />
// 					<FaShieldAlt /> Layout Limit : 40,000 Baht <br />
// 				</DescriptTxt>
// 			</Detail>
// 			<button>Buy</button>
// 		</StyledBox>
// 		<StyledBox>
// 			<CardHeader>
// 				<StyledName>Special Package</StyledName>
// 			</CardHeader>
// 			<Detail>
// 				<DescriptTxt>
// 					<FaShieldAlt /> Premium/Year : 9,500 Baht <br />
// 					<FaShieldAlt /> Premium/Quater : 2,500 Baht <br />
// 					<FaShieldAlt /> Layout Limit : 95,000 Baht <br />
// 				</DescriptTxt>
// 			</Detail>
// 			<button>Buy</button>
// 		</StyledBox>
// 		<StyledBox>
// 			<CardHeader>
// 				<StyledName>Cats Cover Package</StyledName>
// 			</CardHeader>
// 			<Detail>
// 				<DescriptTxt>
// 					<FaShieldAlt /> Premium/Year : 5,500 Baht <br />
// 					<FaShieldAlt /> Premium/Quater : 1,5000 Baht <br />
// 					<FaShieldAlt /> Layout Limit : 50,000 Baht <br />
// 				</DescriptTxt>
// 			</Detail>
// 			<button>Buy</button>
// 		</StyledBox>
// 		<StyledBox>
// 			<CardHeader>
// 				<StyledName>Dog Cover Package</StyledName>
// 			</CardHeader>
// 			<Detail>
// 				<DescriptTxt>
// 					<FaShieldAlt /> Premium/Year : 5,500 Baht <br />
// 					<FaShieldAlt /> Premium/Quater : 1,5000 Baht <br />
// 					<FaShieldAlt /> Layout Limit : 50,000 Baht <br />
// 				</DescriptTxt>
// 			</Detail>
// 			<button>Buy</button>
// 		</StyledBox>
// 		<StyledBox>
// 			<CardHeader>
// 				<StyledName>Exotic Package</StyledName>
// 			</CardHeader>
// 			<Detail>
// 				<DescriptTxt>
// 					<FaShieldAlt /> Premium/Year : 4,000 Baht <br />
// 					<FaShieldAlt /> Premium/Quater : 1,050 Baht <br />
// 					<FaShieldAlt /> Layout Limit : 40,000 Baht <br />
// 				</DescriptTxt>
// 			</Detail>
// 			<button>Buy</button>
// 		</StyledBox>
// 		</div>
// 	  </Container>
	  
//     </>
//   );
}


export default Packages;