import React, { useState, useEffect } from 'react';

//material ui comoponents
import { Grid, Button, TextField, InputAdornment, Typography } from '@material-ui/core';
//material ui icons
import { AccountCircle, Lock, SportsTennis } from '@material-ui/icons/';


//styles
import useStyles from '../styles/loginTheme'
import GenericTitle from './GenericTitle';
import LoginButtons from './LoginButtons';
import LoginForm from './LoginForm';


//TODO:
//1. fixa utseende
//2. lägg till error hantering with felaktig inloggning
//3. routa vidare till admin view ---KOLLA DENNA DEL MED OSKAR-- 

export default function LoginPage() {

    //style
    const classes = useStyles();

    //local variables used for onChange variables instead of redux.
    const [email, updateEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [pwd, updatePwd] = useState('');
    const [validPwd, setValidPwd] = useState(true);

    //TEST TOGGLE error. FUNKAR INTE UTE USEEFFECT
    /*
      useEffect(() =>{
          if (email ===  "hej" ) {
              setValidEmail(!validEmail);
          }
      }, [])
  */

    return (
        <Grid container spacing={2} alignItems="center" direction="column">
            <Grid item xs={12} alignItems="center">
                <GenericTitle title="Sign in" />
            </Grid>
            <LoginForm
                email={email}
                updateEmail={updateEmail}
                validEmail={validEmail}
                pwd={pwd}
                updatePwd={updatePwd}
                validPwd={validPwd}
            />
            <LoginButtons
                variant="contained"
                title="LOG IN"
                submit={() => console.log("submition succeeded")}
                color='#FFF0D7'
            />
            <LoginButtons
                variant="contained"
                title="Forgot Password"
                submit={() => console.log("submition succeeded")}
                color='#FFF0D7'
            />
            <LoginButtons
                variant="outlined"
                title="REGISTER"
                submit={() => console.log("submition succeeded")}
                color='primary'
            />
        </Grid>
    );

}
