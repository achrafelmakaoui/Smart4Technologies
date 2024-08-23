import React, { useState } from "react";
import "./SigninForm.css";
import signUpLogo from '../Images/H2_hydrogen.png'
import { Link } from "react-router-dom";
export function SigninFormDemo() {
  const [passwordType, setPasswordType] = useState('password');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  }
  return (
    <div className="signin-container">
      <img className="signin-img" src={signUpLogo} alt="signinLogo"/>
      <h2 className="signin-title">Sign In</h2>
      <p className="signin-subtitle">
      Access Your Account and Power Up Your Hydrogen Journey
      </p>
      <form className="signin-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="email@gmail.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type={passwordType} />
          </LabelInputContainer>
        </div>
        <div className="signin-buttons">
          <button className="signin-button" type="submit">
            Sign In 
            <BottomGradient />
          </button>
          <button className="signin-button-eye" onClick={togglePasswordVisibility}>
            {passwordType === 'password' ?  <><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></> : <><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye-off"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg></>}  
          </button>
        </div>
        <p className="Register-pthg">Don't have an account?  <Link to='/signup'><mark>Sigup now</mark></Link></p>
        <div className="divider" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="bottom-gradient" />
      <span className="bottom-gradient-blur" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return <div className={`label-input-container ${className}`}>{children}</div>;
};

const Label = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor} className="label">{children}</label>;
};

const Input = React.forwardRef(({ type, ...props }, ref) => {
  return <input type={type} className="input" ref={ref} {...props} />;
});
