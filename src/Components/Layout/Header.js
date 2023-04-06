import { Fragment } from "react";
import Image from "./Image";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton cartButton={props.sCart} />
      </header>
      <Image />
    </Fragment>
  );
};
export default Header;
