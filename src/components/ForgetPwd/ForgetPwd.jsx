import React from "react";
import "./ForgetPwd.css";
import signUpLogo from '../Images/H2_hydrogen.png'
export function ForgetPwd() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="forgetpwd-container">
      <img className="forgetpwd-img" src={signUpLogo} alt="signUpLogo" loading="lazy" title="SignUp Logo"/>
      <h2 className="forgetpwd-title">Reset your password</h2>
      <form className="forgetpwd-form" onSubmit={handleSubmit}>
        <p className="forgetpwd-subtitle">
        Enter your user account's verified email address and we will send you a password reset link.
        </p>
        <div className="input-group">
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input placeholder="email@gmail.com" type="email" />
          </LabelInputContainer>
        </div>
        <div className="forgetpwd-buttons">
          <button className="forgetpwd-button" type="submit">
            Send 
            <BottomGradient />
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
