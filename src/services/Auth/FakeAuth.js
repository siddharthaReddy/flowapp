import React from 'react';
import { withRouter } from "react-router-dom";

export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
};

export const AuthButton = withRouter(({ history }) => (
    fakeAuth.isAuthenticated
      ? <p>
          Welcome! <button onClick={() => {
            fakeAuth.signout(() => history.push('/'))
          }}>Sign out</button>
        </p>
      : null
  ))