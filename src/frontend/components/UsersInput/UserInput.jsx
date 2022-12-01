import Button from "../Button/Button";
import Card from "../UI/Card";
import styles from "./UserInput.module.css";
import ReactJsAlert from "reactjs-alert";
import React, { useState } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";

const UserInput = (props) => {
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("success");
  const [title, setTitle] = useState("This is a alert");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const [error, setError] = useState();

  const userInputHandler = (event) => {
    event.preventDefault();
    setEnteredUsername(event.target.value);
    console.log(enteredUsername);
    if (enteredUsername.length > 10) {
      setError({
        title: "Name Error",
        message: "name length is > 10",
      });
      setStatus(true);
      setType("warning");
      setTitle("Warning!!! user name > 10");
    }
    if (+enteredAge <= 0) {
      setError({
        title: "Age Error",
        message: "age is < 0",
      });
      setStatus(true);
      setType("warning");
      setTitle("Warning!!! age > 0");
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const userNameChageHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Card className={styles.input}>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form action="" onSubmit={userInputHandler}>
        <label htmlFor="username">NAME</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={userNameChageHandler}
        />
        <label htmlFor="age">AGE</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">BUTTON</Button>
      </form>
      <ReactJsAlert
        status={status} // true or false
        type={type} // success, warning, error, info
        title={title}
        Close={() => setStatus(false)}
      ></ReactJsAlert>
    </Card>
  );
};

export default UserInput;
