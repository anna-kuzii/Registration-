import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Logo } from '../Logo';
import sportNewsLogin from '../../assets/imgs/sport-news-login.png';
import RegisterForm from '../../containers/RegisterForm';
import { LoginForm } from '../LoginForm';
import { ForgotPasswordForm } from '../ForgotPasswordForm';
import { RecoverPasswordForm } from '../RecoverPasswordForm';
import infoContent from '../InfoContent';
import './style.scss';

export const RegisterLayout = () => {
  const path = window.location.pathname;

  return (
    <div className="register-layout">
      <div className="container">
        <section className="login-banner-wrapper">
          <img src={sportNewsLogin} alt="Login banner"/>
          <div className="gradient-banner"/>
          <Logo/>
        </section>
        <section className="auth-section">
          <div className="auth-section-header">
            <p>{path === '/signin' ? 'Already have an account?' : 'Don’t have an account?'}</p>
            {path === '/signin' ?
              <Link className="btn" to='/login'>Log in</Link> :
              <Link className="btn" to='/signin'>Get Started</Link>
            }
          </div>
          <Switch>
            <Route exact path='/signin' component={RegisterForm} />
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/forgot-password' component={ForgotPasswordForm} />
            <Route exact path='/recover-password' component={RecoverPasswordForm} />
            <Route exact path='/check-your-email' component={infoContent} />
          </Switch>
        </section>
      </div>
    </div>
  );
};
