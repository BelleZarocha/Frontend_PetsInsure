import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//MaterialUI
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FaUserCircle } from 'react-icons/fa';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', 
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignIn(props) {
	const navigate=useNavigate();
	const history = useNavigate();
	const initialFormData = Object.freeze({
		email: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		axios
			.post("https://dull-blue-gorilla-shoe.cyclic.app/user/login", {
				username:formData.email,
				password:formData.password
			}, {
				headers: {Authorization: `Bearer ${localStorage.getItem("jwt")}`},
			})
			.then((res) => {
				let token = res.data;
				localStorage.setItem("jwt", token);
				props.setLogin(true)
				// props.setLogin(true);
				navigate("/");
			})
			.catch((err) => {
			});
		// axios
		// 	.post(`token/`, {
		// 		email: formData.email,
		// 		password: formData.password,
		// 	})
		// 	.then((res) => {
		// 		localStorage.setItem('access_token', res.data.access);
		// 		localStorage.setItem('refresh_token', res.data.refresh);
		// 		axiosInstance.defaults.headers['Authorization'] =
		// 			'JWT ' + localStorage.getItem('access_token');
		// 		history.push('/');
		// 	});
	};

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
                <FaUserCircle style={{color: "#2a9d8f", fontSize: "40px"}}></FaUserCircle>
				<Typography>
                    <h2 style={{color: "#2a9d8f"}}>Log In</h2>  
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={handleChange}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={handleChange}
					/>
					
					<button
                        style={{backgroundColor: "#2a9d8f", border:"none", width: "100%", fontSize:"15px", padding: "5px", color:"#fff", cursor:"pointer"}}						
						type="submit"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Sign In
					</button>
					<Grid container>
						<Grid item>
							<Link href="/register" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}