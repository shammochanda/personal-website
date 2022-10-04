import { Fragment } from "react";
import classes from "./headings.module.css";

const Headings = (props) => {
  return (
    <Fragment>
      <h1 className={classes.headings}>{props.children}</h1>
    </Fragment>
  );
};

export default Headings;
