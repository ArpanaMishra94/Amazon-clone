import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HamburgerButton from './HamburgerButton';

export default function SwipeableTemporaryDrawer() {
    const [state, setState] = React.useState({left: false});

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({
            ...state,
            [anchor]: open
        });
    };

    const list = (anchor) => (
        <Box sx={
                {width: 370}
            }
            role="presentation"
            onClick={
                toggleDrawer(anchor, false)
            }
            onKeyDown={
                toggleDrawer(anchor, false)
            }
            style={
                {overflowX: 'hidden'}
        }>

            <List style={
                {
                    backgroundColor: "#2c3949",
                    height: '3.5vh'
                }
            }>
                <div style={
                    {
                        display: 'flex',
                        margin: '4px 0 0 32px'
                    }
                }>
                    <AccountCircleIcon style={
                        {
                            color: 'white',
                            fontSize: '30px'
                        }
                    }/>
                    <h3 style={
                        {
                            color: 'white',
                            marginLeft: '7px',
                            marginTop: '4px'
                        }
                    }>Hello, Sign in</h3>
                </div>
            </List>

            <List>
                <h3 style={
                    {margin: '16px 20px 15px 35px'}
                }>Trending</h3>
                {
                ['Best Sellers', 'New Releases', 'Movers and Shakers'].map((text, index) => (
                    <ListItem button
                        key={text}
                        style={
                            {marginLeft: '20px'}
                    }>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))
            } </List>

            <Divider/>

            <List>
                <h3 style={
                    {margin: '16px 20px 15px 35px'}
                }>Digital Content And Devices</h3>
                {
                [
                    'Echo & Alexa',
                    'Fire TV',
                    'Kindle E-Readers & eBooks',
                    'Audible Audiobooks',
                    'Amazon Prime Video',
                    'Amazon Prime Music'
                ].map((text, index) => (
                    <ListItem button
                        key={text}
                        style={
                            {marginLeft: '20px'}
                    }>
                        <ListItemText primary={text}/>
                        <NavigateNextIcon style={
                            {
                                color: 'gray',
                                marginRight: '12px',
                                fontSize: '30px'
                            }
                        }/>
                    </ListItem>
                ))
            } </List>

            <Divider/>

            <List>
                <h3 style={
                    {margin: '16px 20px 15px 35px'}
                }>Shop By Department</h3>
                {
                ['Mobiles, Computers', 'TV, Appliances, Electronics', "Men's Fashion", "Women's Fashion"].map((text, index) => (
                    <ListItem button
                        key={text}
                        style={
                            {marginLeft: '20px'}
                    }>
                        <ListItemText primary={text}/>
                        <NavigateNextIcon style={
                            {
                                color: 'gray',
                                marginRight: '12px',
                                fontSize: '30px'
                            }
                        }/>
                    </ListItem>
                ))
            }
                {
                ['See All'].map((text, index) => (
                    <ListItem button
                        key={text}
                        style={
                            {marginLeft: '20px'}
                    }>
                        <ListItemText primary={text}/>
                        <KeyboardArrowDownIcon style={
                            {
                                color: 'gray',
                                marginRight: '74%',
                                fontSize: '30px'
                            }
                        }/>
                    </ListItem>
                ))
            } </List>

            <Divider/>

            <List>
                <h3 style={
                    {margin: '16px 20px 15px 35px'}
                }>Programs & Features</h3>
                {
                ['Gift Crads & Mobile Recharges'].map((text, index) => (
                    <ListItem button
                        key={text}
                        style={
                            {marginLeft: '20px'}
                    }>
                        <ListItemText primary={text}/>
                        <NavigateNextIcon style={
                            {
                                color: 'gray',
                                marginRight: '12px',
                                fontSize: '30px'
                            }
                        }/>
                    </ListItem>
                ))
            }
                {
                ['Flight Tickets', '#FounditOnAmazon'].map((text, index) => (
                    <ListItem button
                        key={text}
                        style={
                            {marginLeft: '20px'}
                    }>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))
            } </List>

            <Divider/>

            <List>
                <h3 style={
                    {margin: '16px 20px 15px 35px'}
                }>Help & Settings</h3>
                {
                ['Your Account', 'Customer Service', 'Sign In'].map((text, index) => (
                    <ListItem button
                        key={text}
                        style={
                            {marginLeft: '20px'}
                    }>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))
            } </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={"left"}>
                <Button style={
                        {marginBottom: '30px'}
                    }
                    onClick={
                        toggleDrawer("left", true)
                }><HamburgerButton/></Button>
                <SwipeableDrawer anchor={"left"}
                    open={
                        state["left"]
                    }
                    onClose={
                        toggleDrawer("left", false)
                    }
                    onOpen={
                        toggleDrawer("left", true)
                }>
                    {
                    list("left")
                } </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}
