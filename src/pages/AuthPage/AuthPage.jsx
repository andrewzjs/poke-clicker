import { useState } from 'react';
import './AuthPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import logo from '../../images/logo2.PNG';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      <div>
        <div className="auth=el">
          <h1 id ="auth-title">PokéClicker</h1>
          <img id = "logo-auth" src={logo} />
        </div>
        <button id ="auth-toggle" onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Create an Account' : 'Log into Existing Account'}</button>
      </div>
      <div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      </div>
    </main>
  );
}