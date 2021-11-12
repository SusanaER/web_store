import { Grid, Container, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import React, {useState } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NavBar from '../../components/layouts/NavBar'
import Styles from './Styles'
import Swal from 'sweetalert2'

const Log_In = () => {
	const [body, setBody] = useState({ Username: '', Password: ''})
	const classes = Styles()

	const handleChange = e => {
		setBody({
			...body,
			[e.target.name]: e.target.value
		})
	}

const onSubmit = () => {
	if(body.Username === '' || body.Password === ''){
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please complete the data!'
		  })
	}else{
		const username = body.Username
		const password = body.Password
		search(username, password)
	}
}

function search(username, password){

	fetch('http://localhost:8080/WebStore/client')
	.then(function(response) {
		return response.json();
	  })
	  .then(function(myJson) {
		let lenghtData = 0
		myJson.forEach( e => {
			lenghtData += 1 
		})

		let user;
		let pass;
		for (let i = 0; i < lenghtData; i++) {
			user = myJson[i].username
			pass = myJson[i].password
			if(user === username && pass === password){
				console.log('el numero ' + i + ' es el correcto')
				document.cookie = "username="+username 
				document.cookie = "password="+password
				const Toast = Swal.mixin({
					toast: true,
					position: 'top-end',
					showConfirmButton: false,
					timer: 3000,
					timerProgressBar: true,
					didOpen: (toast) => {
					  toast.addEventListener('mouseenter', Swal.stopTimer)
					  toast.addEventListener('mouseleave', Swal.resumeTimer)
					}
				  })
				  
				  Toast.fire({
					icon: 'success',
					title: 'Successful log in'
				  })
				/*setTimeout(function(){
					window.location.href = "/log_in";
				  }, 5 * 500);*/
				  break;
			}else{
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Please enter the correct data!'
				  })
			}
		}
	  })
        
	//const result = obj.filter(element => element === username && element === password)
}
	
	return (
		<Grid container component='main' className={classes.root}>
            <NavBar className={classes.navbar}/>
			<Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
				<div className={classes.div}>
					<Avatar className={classes.avatar}>
						<AccountCircleIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>Log In</Typography>
					<form className={classes.form}>
                        <TextField
							fullWidth
							autoFocus
							color='primary'
							margin='normal'
							variant='outlined'
							label='Username'
							name='Username'
							value={body.Username}
							onChange={handleChange}
						/>
						<TextField
							fullWidth
							type='password'
							color='primary'
							margin='normal'
							variant='outlined'
							label='Password'
							name='Password'
							value={body.Password}
							onChange={handleChange}
						/>
						<Button
							fullWidth
							variant='contained'
							color='primary'
							name="button_log_in"
							className={classes.button}
							onClick={() => onSubmit()}
						>
							Log In
						</Button>
					</form>
				</div>
				
			</Container>
		</Grid>
	)
}
export default Log_In