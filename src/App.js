import React from 'react';
import Login from './Login';
import SignUp from './signup';
import firebase from 'firebase/app';
import 'firebase/auth';

const App = () => {
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default App;
