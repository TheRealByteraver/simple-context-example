import React, { useState } from 'react';
import { Provider } from './Context';
import ContextClient from './ContextClient';

export default function App() {

  const [userData, setUserData] = useState({
    credentials: {
      username: 'erland',
      password: '1234'
    },
    name: {
      first: 'erland',
      last: 'van olmen'
    }
  });

  const setCredentials = (username, password) => {
    setUserData(prevState => {
      return { 
        ...prevState,
        credentials: { username, password } 
      };
    });
    console.log('called setCredentials');
  }  

  const setName = (first, last) => {
    setUserData(prevState => {
      return { 
        ...prevState,
        name: { first, last } 
      };
    });
    console.log('called setName');
  }

  // Provider requires a value prop, usually an application state 
  // together with actions and event handlers
  return (
    <Provider value={{
      userData,
      actions: {
        setCredentials,
        setName
      }
    }}>
      <ContextClient />
    </Provider>
  );
}