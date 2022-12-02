import Button from "../Button/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import ReactJsAlert from "reactjs-alert";
import React, { useState, Fragment, useRef } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";
// import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("success");
  const [title, setTitle] = useState("This is a alert");
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const userInputHandler = (event) => {
    event.preventDefault();
    const enterName = ageInputRef.current.value;
    const enterAge = ageInputRef.current.value;
    // setEnteredUsername(event.target.value);
    console.log(enterName);
    if (enterName.length > 10) {
      setError({
        title: "Name Error",
        message: "name length is > 10",
      });
      setStatus(true);
      setType("warning");
      setTitle("Warning!!! user name > 10");
    }
    if (+enterAge <= 0) {
      setError({
        title: "Age Error",
        message: "age is < 0",
      });
      setStatus(true);
      setType("warning");
      setTitle("Warning!!! age > 0");
    }
    props.onAddUser(enterName, enterAge);
    // setEnteredUsername("");
    // setEnteredAge("");
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // const userNameChageHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form action="" onSubmit={userInputHandler}>
          <label htmlFor="username">NAME</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={userNameChageHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">AGE</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">BUTTON</Button>
        </form>
      </Card>
      <ReactJsAlert
        status={status} // true or false
        type={type} // success, warning, error, info
        title={title}
        Close={() => setStatus(false)}
      ></ReactJsAlert>
    </Fragment>
  );
};

export default AddUser;
