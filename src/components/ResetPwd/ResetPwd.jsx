import React, { useState } from "react";
import "./ResetPwd.css";
import signUpLogo from '../Images/H2_hydrogen.png'

export function ResetPwd() {
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
    <div className="resetPwd-container">
      <img className="resetPwd-img" src={signUpLogo} alt="signUpLogo" loading="lazy" title="SignUp Logo"/>
      <h2 className="resetPwd-title">Reset your password</h2>
      <form className="resetPwd-form" onSubmit={handleSubmit}>
        <p className="resetPwd-subtitle">
        Create a new password and confirm it to complete the reset.
        </p>
        <div className="input-group">
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type={passwordType} />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type={passwordType} />
          </LabelInputContainer>
        </div>
        <div className="resetPwd-buttons">
          <button className="resetPwd-button" type="submit">
            Change 
            <BottomGradient />
          </button>
          <button className="signup-button-eye" onClick={togglePasswordVisibility}>
            {passwordType === 'password' ?  <><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></> : <><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye-off"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg></>}  
          </button>
        </div>
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
