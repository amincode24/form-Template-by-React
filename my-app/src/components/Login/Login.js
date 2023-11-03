import React from "react";
import classes from "./Login.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import useInput from "../../hook/use-input";

const usernameInput = (value) => value.trim().length > 6;
const passwordInput = (value) => value.trim().length > 8;
const emailInput = (value) => value.includes("@");

const Login = (props) => {
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
    <Card className={classes.input}>
      <header>
        <h2>Login</h2>
      </header>
      <div className={classes.container}>
        <form className={classes.from} onSubmit={formSubmitHandler}>
          <div
            className={`${classes.controls} ${
              usernameHasError ? classes.invalid : ""
            }`}
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={enteredUserame}
              onChange={usernameChangeHandler}
              onBlur={usernameBlurHandler}
            />
          </div>
          <div
            className={`${classes.controls} ${
              passwordHasError ? classes.invalid : ""
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
          </div>
          <div
            className={`${classes.controls} ${
              emailHasError ? classes.invalid : ""
            }`}
          >
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
          </div>
          <div className={classes.actions}>
            <Button className={classes.button} disabled={!formIsValid}>
              Login
            </Button>
            <Button className={classes.button} onClick={props.onShowModal}>
              Signin
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default Login;
