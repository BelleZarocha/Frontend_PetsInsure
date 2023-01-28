import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useParams } from "react-router-dom";
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Packages from './components/Packages/Packages';
import Profile from './components/Profile/Profile';
// import Payment from './components/Payment/Payment'
function App() {
	const[login,setLogin]=useState(false)
	useEffect(()=>{
		if(localStorage.getItem("jwt")!=undefined){
			setLogin(true)
		}else {
			setLogin(false)
		}
	},[])


	return (
		<div>
			<Nav login={login}/>

			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login setLogin={setLogin}/>} />
				<Route path="/packages" element={<Packages />} />
				{/* <Route path="/payment" element={<Payment />} /> */}
				<Route path="/profile" element={<Profile />} />
      		</Routes>

			<Footer />
		</div>
		
	);
}
export default App; 