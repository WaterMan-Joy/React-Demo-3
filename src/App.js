import styles from "./App.module.css";
import UserInputList from "./frontend/components/UserInputList/UserInputList";
import AddUser from "./frontend/components/AddUser/AddUser";
import React, { useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (nName, nAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: nName, age: nAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className={styles.App}>
      <h1>Home</h1>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserInputList users={userList} />
    </div>
  );
}

export default App;
