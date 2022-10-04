import { Fragment } from "react";
import Details from "../details";
import Headings from "../headings"
import classes from "./blurb.module.css";

const NotFoundBlurb = (props) => {
  return (
    <div className={classes.main}>
      <Headings>404 | Page Not Found</Headings>
      <Details>
        Maybe I could make one for you?
      </Details>
    </div>
  );
};

export default NotFoundBlurb;
