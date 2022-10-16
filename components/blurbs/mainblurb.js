import { Fragment } from "react";
import Details from "../details";
import Headings from "../headings"
import classes from "./blurb.module.css";

const MainBlurb = (props) => {
  return (
    <div className={classes.main}>
      <Headings>Hi.</Headings>
      <Headings> I&apos;m Shammo Chanda.</Headings>
      <Details>
        I&apos;m a versatile software engineer.
      </Details>
    </div>
  );
};

export default MainBlurb;


