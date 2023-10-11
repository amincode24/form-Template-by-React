import React, { useReducer, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Signin.module.css";
import Button from "../UI/Button";
const usernameReducer = (state, action) => {
  if (action.type === "User_Input") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "Input_Blur") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
};

const emailReducer = (state, action) => {
  if (action.type === "User_Input") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "Input_Blur") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
};

const passwordReducer = (state, action) => {
  if (action.type === "User_Input") {
    return { value: action.val, isValid: action.val.trim().length > 8 };
  }
  if (action.type === "Input_Blur") {
    return { value: state.value, isValid: state.value.trim().length > 8 };
  }
};
const Signin = (props) => {
  const [formIsValid, setFromIsValid] = useState(false);
  const [usernameState, dispatchUsername] = useReducer(usernameReducer, {
    value: "",
    isValid: null,
  });

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  const usernameChangeHandler = (event) => {
    dispatchUsername({ type: "User_Input", val: event.target.value });

    setFromIsValid(event.target.value.trim().length > 8);
  };

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "User_Input", val: event.target.value });
    setFromIsValid(event.target.value.includes("@"));
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "User_Input", val: event.target.value });
    setFromIsValid(event.target.value.trim().length > 8);
  };
  const validateUsernameHandler = () => {
    dispatchUsername({ type: "Input_Blur" });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "Input_Blur" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "Input_Blur" });
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Modal>
      <div className={classes.container}>
        <header>
          <h1>Sign in</h1>
        </header>
        <form onSubmit={submitHandler}>
          <div className={classes.nameinput}>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div
            className={`${classes.controls} ${
              usernameState.isValid === false ? classes.invalid : ""
            }`}
          >
            <input
              type="text"
              value={usernameState.value}
              onBlur={validateUsernameHandler}
              onChange={usernameChangeHandler}
              placeholder="Userame"
            />
          </div>
          <div
            className={`${classes.controls} ${
              emailState.isValid === false ? classes.invalid : ""
            }`}
          >
            <input
              type="email"
              value={emailState.value}
              onBlur={validateEmailHandler}
              onChange={emailChangeHandler}
              placeholder="E-Mail"
            />
          </div>
          <div
            className={`${classes.controls} ${
              passwordState.isValid === false ? classes.invalid : ""
            }`}
          >
            <input
              type="password"
              value={passwordState.value}
              onBlur={validatePasswordHandler}
              onChange={passwordChangeHandler}
              placeholder="Password"
            />
          </div>
          <div className={classes.button}>
            <Button className={classes.signin} disabled={!formIsValid}>
              SignIN
            </Button>
            <Button onClick={props.onCloseModal} className={classes.close}>
              Close
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Signin;
