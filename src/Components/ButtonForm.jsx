import Typography from '@material-ui/core/Typography';
import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Email from '@material-ui/icons/Email';
export default class ButtonForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            Fname:'',Email:'',users:[]
        };

    this.handleChange4Email = this.handleChange4Email.bind(this);

    this.handleChange4Fname = this.handleChange4Fname.bind(this);
    this.PushNewUser = this.PushNewUser.bind(this);
    }

// handle Email chanage event
  handleChange4Email(e){
   this.setState({Email: e.target.value});
  }

  handleChange4Fname(e){
// handle first name changing
   this.setState({Fname: e.target.value});
  }
  PushNewUser(email,fname){
 const clonedstatefulusers =  this.state.users.slice();
 clonedstatefulusers.push({Email:email,FirstName:fname});
 let newUser =  this.setState({users:clonedstatefulusers});
this.passUserDetails(email,fname);
}


passUserDetails(email,fname){
    this.props.takeUserDetails(email,fname);
    this.setState({Email:'',Fname:''});
}
    render(){
        if (this.props.FormButtonSwitch === true) {
return(
    <div>
        <Grid container style={{margin:20}}>
            <Paper style={{padding:20}}>
 <Typography variant="headline">
                                Start now! Simple steps
                        </Typography>
      <Grid>
      <TextField value={this.state.Fname} type="text"
         onChange={this.handleChange4Fname}
        id="input-with-icon-textfield"
        label="First Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
                      </Grid>

      <Grid>

      <TextField value={this.state.Email} onChange={this.handleChange4Email}
 type="email"       id="input-with-icon-textfield"
        label="Email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          ),
        }}
      />
          </Grid>
          <br/>
           <Button onClick={() => this.PushNewUser(this.state.Email,this.state.Fname)} fullWidth variant="contained" color="secondary" >
        Join Us
      </Button>

                </Paper>
            </Grid>
        </div>
)
        } else {
            return (
                <div>
                </div>
            )
        }
    }
}
