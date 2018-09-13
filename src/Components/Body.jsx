import Badge from '@material-ui/core/Badge';

import ppg from './img/ppg.jpg';
import ben10 from './img/ben10.jpg';
import CardMedia from "@material-ui/core/CardMedia";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PropTypes from "prop-types";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Avatar from "@material-ui/core/Avatar";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import AccountBalance from "@material-ui/icons/AccountBalance";
import ButtonForm from './ButtonForm';
import FloatingActionButtons from './FloatingActionButtons';
import defAv from './img/avatae.png';
export default class Body extends Component {
    constructor(props){
super(props);
this.state = {
    FormButtonSwitch: 0, users: [], userAdded:0
};
this.handletakeUserDetails = this.handletakeUserDetails.bind(this);
this.handleClose = this.handleClose.bind(this);
this.HandleFormButtonSwitch = this.HandleFormButtonSwitch.bind(this);
    }

    HandleFormButtonSwitch(){
        this.setState({FormButtonSwitch: !this.state.FormButtonSwitch});
    }
    handletakeUserDetails(em,fn){
let cusers =  [...this.state.users];
cusers.push({ Name:fn,email:em,img:defAv
 });
this.setState({users:cusers});
this.setState({userAdded:!this.state.userAdded});
this.setState({FormButtonSwitch:!this.state.FormButtonSwitch});
}
handleClose(){
    this.setState({userAdded:!this.state.userAdded});
}
    render(){

        return <div>
            <Grid container justify="center" style={{ margin: 20 }}>
             <Grid md={12}>
                    <Snackbar newUserState={this.state.userAdded}
                    close={this.handleClose} />
                 </Grid>
              <Grid md={8}>
                <Paper style={{ margin: 30, padding: 20 }}>
                  <Typography variant="display1">
                    <AccountBalance />
                    Welcome to Oshozondi Square!!
                  </Typography>
                  <Typography variant="body1">
                    come for the cats ,stay for the empathy.
                  </Typography>
                  <Button onClick={this.HandleFormButtonSwitch} variant="contained" color="primary">
                    BECOME AN OSHOZITE
                  </Button>
                  <ButtonForm takeUserDetails={this.handletakeUserDetails} FormButtonSwitch={this.state.FormButtonSwitch} />
                </Paper>

                <Paper style={{ margin: 30 }}>
                  <Grid container>
                  <Grid md={6}>
                  <Paper>
                                    <Card>
                                        <div >
                                            <CardContent >                                 <Badge badgeContent='18' color="secondary">

                                            </Badge>
                                                <Typography variant="headline">The Powerpuff Girls

                                                  </Typography>
                                                <Typography variant="subheading" color="textSecondary">

                                                 Episode 34
</Typography>
                                            </CardContent>
                                            <div >
                                                <IconButton aria-label="Previous">
                                                    <SkipPreviousIcon />
                                                </IconButton>
                                                <IconButton aria-label="Play/pause">
                                                    <PlayArrowIcon />
                                                </IconButton>
                                                <IconButton aria-label="Next">
                                                    <SkipNextIcon />
                                                </IconButton>
                                            </div>
                                        </div>

                                        <img src={ppg} height={180}/>
                                    </Card>

                      </Paper>


                      </Grid>
                        <Grid md={6}>
                        <Paper>
<Card>
                                <div >
                                    <CardContent >
                                                <Badge badgeContent='18' color="secondary">

                                                </Badge> 
                                        <Typography variant="headline">Ben 10 Live!</Typography>
                                        <Typography variant="subheading" color="textSecondary">
                                    Episode 23        </Typography>
                                    </CardContent>
                                    <div >
                                        <IconButton aria-label="Previous">
                                            <SkipPreviousIcon />
                                        </IconButton>
                                        <IconButton aria-label="Play/pause">
                                            <PlayArrowIcon/>
                                        </IconButton>
                                        <IconButton aria-label="Next">
                                             <SkipNextIcon />
                                        </IconButton>
                                    </div>
                                </div>
                                        <img src={ben10} height={180}/>
                            </Card>

                            </Paper>
                      </Grid>
                                             </Grid>
                </Paper>
              </Grid>

              <Grid md={4}>
                <Paper style={{ margin: 20, padding: 50 }}>
                  {this.state.users.map(user => <div>
                      <Card>
                        <CardActionArea>
                          <Avatar alt={user.name} src={user.img} />

                          <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                              {user.Name}
                            </Typography>
                            <Typography component="p">
                              Latest User!
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            Share Profile
                          </Button>
                          <Button size="small" color="primary">
                            View Profile
                          </Button>
                        </CardActions>
                      </Card>
                    </div>)}
                </Paper>
              </Grid>
            </Grid>

            <FloatingActionButtons />
          </div>;
    }
}
export class Snackbar extends Component{

    render(){
if(this.props.newUserState){
return (
  <SnackbarContent
    aria-describedby="client-snackbar"
    message={<span id="client-snackbar">New User Alert!</span>}
    action={[
      <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={this.props.close}
      >
        <CloseIcon />
      </IconButton>
    ]}
  />
);
}else{
    return(
        <div>
            </div>
    )
}
    }

}

Snackbar.propTypes = {
  newUserState: PropTypes.bool
};
