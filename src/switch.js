import React, { useState } from 'react';
import Login from './Login';
import SignUp from './signup';

const Switch = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? (
        <div>
          <Login />
          <button class="signup" onClick={handleSwitch}>Sign Up</button>
        </div>
      ) : (
        <div class="signup">
          <SignUp />
          <button class="login" onClick={handleSwitch}>Log In</button>
        </div>
      )}
    </div>
  );
};

export default Switch;
