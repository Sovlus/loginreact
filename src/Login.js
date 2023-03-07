import React, { useState, useCallback } from 'react';
import firebase from './firebase';
import SignUp from './signup';
import App from './App';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [okMessage, setOkMessage] = useState(null);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setEmail('');
        setPassword('');
        setErrorMessage(null);
        setOkMessage('Zalogowano pomyślnie'); 
      })
      .catch((error) => {
        console.error('Błąd podczas wysyłania danych:', error);
        setErrorMessage('Nieprawidłowy e-mail lub hasło, sporóbuj ponownie.');
      });
  }, [email, password]);

  const handlePasswordVisibility = useCallback(() => {
    const passwordInput = document.getElementById('password-input');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }, []);

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label><i className="fas fa-eye password-icon" onClick={handlePasswordVisibility}></i>
          <input id="password-input" className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
        </div>
        <button className="login-button" type="submit">Login</button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {okMessage && <div className="ok-message">{okMessage}</div>}
      </form>
    </div>
  );
};

export default Login;
