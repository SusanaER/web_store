import { Grid, Container, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import React, {useState } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NavBar from '../../components/layouts/NavBar'
import Styles from './Styles'
import Swal from 'sweetalert2'

const Sign_Up = () => {
	const [body, setBody] = useState({ Username: '', Password: '' , Name: '', LastName:'', Email: ''})
	const classes = Styles()

	const handleChange = e => {
		setBody({
			...body,
			[e.target.name]: e.target.value
		})
	}

const onSubmit = () => {
	if(body.Name === '' || body.Username === '' || body.Password === '' || body.LastName === '' || body.Email === ''){
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please complete the data!'
		  })
	}else{
		fetch('http://localhost:8080/WebStore/client', {
			method: 'POST',
			body: JSON.stringify({
				name: body.Name,
				last_Name: body.LastName,
				password: body.Password,
				username: body.Username,
				email: body.Email
			}),
			headers: {
				"Content-type": "application/json"
			}})
		.then(response => response.json())
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
			title: 'Successful registration'
		  })
		setTimeout(function(){
			window.location.href = "/log_in";
		  }, 5 * 500)
	}
}
	
	return (
		<Grid container component='main' className={classes.root}>
            <NavBar className={classes.navbar}/>
			<Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
				<div className={classes.div}>
					<Avatar className={classes.avatar}>
						<AccountCircleIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>Sign Up</Typography>
					<form className={classes.form}>
						<TextField
							fullWidth
							autoFocus
							color='primary'
							margin='normal'
							variant='outlined'
							label='Name'
							name='Name'
							value={body.Name}
							onChange={handleChange}
						/>
                        <TextField
							fullWidth
							autoFocus
							color='primary'
							margin='normal'
							variant='outlined'
							label='Last Name'
							name='LastName'
							value={body.LastName}
							onChange={handleChange}
						/>
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
							autoFocus
                            type= 'email'
							color='primary'
							margin='normal'
							variant='outlined'
							label='Email'
							name='Email'
							value={body.Email}
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
							className={classes.button}
							onClick={() => onSubmit()}
						>
							Sign Up
						</Button>
					</form>
				</div>
			</Container>
		</Grid>
	)
}
export default Sign_Up