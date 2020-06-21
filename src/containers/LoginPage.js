import React from 'react';
import "./App.css";
import { useHistory, useLocation } from "react-router-dom";
import { fakeAuth } from '../services/Auth/FakeAuth';
import { Container, TextField, Button, Checkbox } from '@material-ui/core';


function LoginPage() {
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
      fakeAuth.authenticate(() => {
        history.replace(from);
      });
    };
  
    return (
        <Container maxWidth="xs" className="login-container box-layout">
            <h2 className="text-center">Login</h2>
            <div className="input-field">
                <TextField label="Username" variant="outlined" size="small" />
            </div>
            <div className="password-field">
                <TextField type="password" label="Password" variant="outlined" size="small" />
            </div>

            <div className="rememberme-field">
                <Checkbox color="primary" value="checkedA" />
                <label>Remember Me</label>
            </div>

            <div className="sumbit-button text-center">
                <Button variant="contained" color="primary" onClick={login}>Log in</Button>
            </div>
        </Container>
    );
}

export default LoginPage;