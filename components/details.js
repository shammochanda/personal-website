import { Fragment } from "react";
import classes from "./details.module.css";

const Details = (props) => {
  return (
    <Fragment>
        <p className={classes.details}>{props.children}</p>
    </Fragment>
  );
};

export default Details;
