import { Fragment } from "react";
import classes from "./Image.module.css";
import mealsImage from "../../assets/meals.jpg";

const Image = (props) => {
  return (
    <Fragment>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A pic of delicious food" />
      </div>
    </Fragment>
  );
};
export default Image;
