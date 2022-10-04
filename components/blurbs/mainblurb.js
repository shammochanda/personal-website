import { Fragment } from "react";
import Details from "../details";
import Headings from "../headings"
import classes from "./blurb.module.css";

const MainBlurb = (props) => {
  return (
    <div className={classes.main}>
      <Headings>Hi.</Headings>
      <Headings> I'm Shammo Chanda.</Headings>
      <Details>
        I'm a frontend developer specializing in React.
      </Details>
    </div>
  );
};

export default MainBlurb;
