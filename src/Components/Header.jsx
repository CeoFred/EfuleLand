import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Body from './Body';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
 import MenuIcon from "@material-ui/icons/Menu";
 import AccountBalance from "@material-ui/icons/AccountBalance";

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
        };

    }

  render() {

    return <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton style={{ marginLeft: -12, marginRight: 20 }} color="inherit" aria-label="Menu">
                    <MenuIcon/>
                    </IconButton>
                    <Typography variant="title" color="inherit" style={{ flexGrow: 1 }}>
                    <AccountBalance />
                    </Typography>
                    <Button color="inherit">Login</Button>
                <Button color='default' variant='outlined'>
                <Typography>
                Sign Up
                </Typography>
                    </Button>
                </Toolbar>
            </AppBar>
                    <Body />
        </div>;
  }
}

export default Header;
