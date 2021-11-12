import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    color: '#115293',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  bread: {
      width: '100%',
  }
}));

export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.bread}>
      <Link color="inherit" href="/" className={classes.link}>
        <HomeIcon className={classes.icon} />
        WebStore
      </Link>
      <Link color="inherit" href="/sign_up" className={classes.link}>
        <AddBoxIcon className={classes.icon} />
        Sign Up
      </Link>
      <Link color="inherit" href="/log_in" className={classes.link}>
        <AddBoxIcon className={classes.icon} />
        Log In
      </Link>
    </Breadcrumbs>
  );
}
