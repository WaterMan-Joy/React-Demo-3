import styles from "./UserInputList.module.css";
// import classes from "../UI/Card.module.css";
import Card from "../UI/Card";

const UserInputList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserInputList;
