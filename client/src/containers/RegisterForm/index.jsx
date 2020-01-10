import React from 'react';
import './style.scss';
import { FormField } from '../../components/field';

export const RegisterForm = () => (
  <form className="registration-form">
    <FormField label="Name" type="text" placeholder="John" />
    <FormField label="Surname" type="text" placeholder="Doe" />
    <FormField label="Username" type="text" placeholder="JDoe" />
    <FormField label="Email" type="email" placeholder="jonhdoe@gmail.com" />
    <FormField label="Password" type="password" placeholder="4 + characters" />

    <button type="button" className="sign-up">Sign Up</button>
  </form>
);
