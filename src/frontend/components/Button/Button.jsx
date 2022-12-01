import Wrapper from "../Helpers/Wrapper";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <Wrapper>
      <button
        className={styles.button}
        type={props.type || "button"}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </Wrapper>
  );
};

export default Button;
