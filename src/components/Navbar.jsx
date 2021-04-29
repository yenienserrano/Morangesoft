import React from 'react'
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

export const Navbar = ({setMenu, menu}) => {

    const classes = useStyles();    

    return (
        <div className={classes.root}>
            <AppBar position="static" color='transparent'>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => {setMenu(!menu)}}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} >
                        Videos Peru
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#202020',
        color: 'white'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
  }));