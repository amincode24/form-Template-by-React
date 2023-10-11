import React, { useState } from "react";
import classes from "./Login.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
const Login = (props) => {
  const [enteredUserame, setEnteredUsername] = useState("");
  const [usernameIsValid, setUserNameIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPsswordIsValid] = useState();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsvalid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);

    setFormIsValid(event.target.value.trim().length > 6);
  };

  const validateUsernameHandler = (event) => {
    setUserNameIsValid(enteredUserame.trim().length > 6);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(event.target.value.trim().length > 8);
  };

  const validatePasswordHandler = (event) => {
    setPsswordIsValid(enteredPassword.trim().length > 8);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(event.target.value.trim().includes("@"));
  };

  const validateEmailHandler = (event) => {
    setEmailIsvalid(enteredEmail.trim().includes("@"));
  };

  const submitHanadler = (event) => {
    event.preventDefault();
    setEnteredUsername("");
    setEnteredEmail("");
    setEnteredPassword("");
  };
  return (
    <Card className={classes.input}>
      <header>
        <h2>Login</h2>
      </header>
      <div className={classes.container}>
      <form className={classes.from} onSubmit={submitHanadler}>
        <div
          className={`${classes.controls} ${
            usernameIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUserame}
            onChange={usernameChangeHandler}
            onBlur={validateUsernameHandler}
          />
        </div>
        <div
          className={`${classes.controls} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div
          className={`${classes.controls} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={classes.button}>
          <Button className={classes.login} disabled={!formIsValid}>
            Login
          </Button>
          <Button className={classes.signin} onClick={props.onShowModal}>
            Signin
          </Button>
        </div>
      </form>
      </div>
    </Card>
  );
};

export default Login;
