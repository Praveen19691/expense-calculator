import React, { useState } from 'react';
import './RegisterPage.css';
import FormField from './FormField';
import SuccessMessage from './SuccessMessage';
import { validateEmail, validatePassword } from '../../general/validation';
import { submitForm } from '../../general/formSubmission';

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long and include uppercase, lowercase, number, and special character');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }

    if (!isValid) {
      return;
    }

    const data = {
      username,
      email,
      password,
      confirmPassword,
    };

    await submitForm(data, setSuccessMessage, setEmailError);

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="register-page d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h1 className="text-center">Register</h1>
        <form onSubmit={handleSubmit}>
          <FormField
            id="username"
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            addon="@"
          />
          <FormField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            addon="@"
          />
          {emailError && <div className="text-danger">{emailError}</div>}
          <FormField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            addon="🔒"
          />
          {passwordError && <div className="text-danger">{passwordError}</div>}
          <FormField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            addon="🔒"
          />
          {confirmPasswordError && <div className="text-danger">{confirmPasswordError}</div>}
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
        {successMessage && <SuccessMessage message={successMessage} />}
      </div>
    </div>
  );
};

export default RegisterPage;
