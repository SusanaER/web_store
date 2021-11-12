import { Grid, Box } from '@material-ui/core'
import React from 'react'
import NavBar from '../../components/layouts/NavBar'
import Styles from './Styles'

const Products = () => {
	const classes = Styles()

	return (
		<Grid container component='main' className={classes.root}>
            <NavBar className={classes.navbar}/>
			<Box component="span" display="block">block</Box>
			<Box component="span" display="block">block</Box>
		</Grid>
	)
}
export default Products