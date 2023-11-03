import React from "react";
import Modal from "../UI/Modal";
import classes from "./Signin.module.css";
import Button from "../UI/Button";
import useInput from "../../hook/use-input";
const usernameInput = (value) => value.trim().length > 6;
const passwordInput = (value) => value.trim().length > 8;
const emailInput = (value) => value.includes("@");
const Signin = (props) => {
  const {
    value: enteredUserame,
    isValid: enteredUsernameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsername,
  } = useInput(usernameInput);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(passwordInput);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(emailInput);
  let formIsValid = false;
  if (enteredUsernameIsValid && enteredPasswordIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    resetUsername();
    resetPassword();
    resetEmail();
  };
  return (
    <Modal>
      <div className={classes.container}>
        <header>
          <h1>Sign in</h1>
        </header>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.nameinput}>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div
            className={`${classes.controls} ${
              usernameHasError ? classes.invalid : ""
            }`}
          >
            <input
              type="text"
              value={enteredUserame}
              onBlur={usernameBlurHandler}
              onChange={usernameChangeHandler}
              placeholder="Userame"
            />
          </div>
          <div
            className={`${classes.controls} ${
              emailHasError ? classes.invalid : ""
            }`}
          >
            <input
              type="email"
              value={enteredEmail}
              onBlur={emailBlurHandler}
              onChange={emailChangeHandler}
              placeholder="E-Mail"
            />
          </div>
          <div
            className={`${classes.controls} ${
              passwordHasError ? classes.invalid : ""
            }`}
          >
            <input
              type="password"
              value={enteredPassword}
              onBlur={passwordBlurHandler}
              onChange={passwordChangeHandler}
              placeholder="Password"
            />
          </div>
          <div className={classes.actions}>
            <Button className={classes.button} disabled={!formIsValid}>Sign In</Button>
            <Button className={classes.button} onClick={props.onCloseModal}>Close</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Signin;
