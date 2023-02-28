import React, { useState, useCallback } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const SignUp = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        history.push('/');
      } catch (error) {
        alert('Make sure your email and password is correct');
      }
    },
    [email, password, history]
  );

  return (
    <div>
      <h2>SignUp</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;