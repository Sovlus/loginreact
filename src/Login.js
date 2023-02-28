import React, { useState , useCallback } from 'react';
import App from './App';
import firebase from './firebase';
import SignUp from './signup';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setEmail('');
        setPassword('');
      })

      firebase.database().ref('users/' + user.uid).set({
        email: email,
        password: password
      })
      .then(() => {
        console.log('Dane wysłane pomyślnie!');
      })
      .catch((error) => {
        console.error('Error podczas wysyłania danych:', error);
      });

      firebase.database().ref('users/' + user.uid).set({
        email: email,
        password: password
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    };

      return (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email</label><br></br>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Email" />
            </div>
            <div>
              <label>Password</label><br></br>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      )};


export default Login;