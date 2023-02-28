import React from 'react';
import Login from './Login';
import SignUp from './signup';
import firebase from 'firebase/app';
import 'firebase/auth';
import Switch from './switch';


const App = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default App;


