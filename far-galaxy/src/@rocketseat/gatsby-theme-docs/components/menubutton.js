import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        zIndex: 2,
        position: 'fixed',
        top: '1vh',
        backgroundColor: '#000',
        color: 'black',
        boxShadow: '0 0 5px #095979ff',
        transition: '0.8s',
        padding: '6px',
        opacity: '0.5',
        "&:hover, &.Mui-focusVisible": {
            opacity: '1',
            transition: '0.3s',
            color: '#397BA6',
            backgroundColor: '#22e3ffff',
            boxShadow: '0 0 20px #1061c6ff',
        },
        [theme.breakpoints.up('xs')]: {
            left: '3%',
            backgroundColor: '#095979ff',
        },
        [theme.breakpoints.up('lg')]: {
            left: '3%',
        },
        "@media screen and (min-width: 780px)": {
            display: 'none',
        },
    }
})
)

export default function MenuButton({showBelow, handleMenuOpen}) {

    const classes = useStyles();

    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    return (
        <div>
            {show &&
                <IconButton onClick={handleMenuOpen} className={classes.menuButton} aria-label="menu button" component="span">
                  <MenuOpenIcon/>
                </IconButton>
            }
        </div>
    )
}

MenuButton.propTypes = {
  handleMenuOpen: PropTypes.func.isRequired,
};