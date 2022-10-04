import { Fragment } from "react";
import Details from "../details";
import Headings from "../headings";
import classes from "./blurb.module.css";

const ContactBlurb = (props) => {
  return (
    <div className={classes.main}>
      <Headings>Contact Me</Headings>
      <Details>shammochanda97@gmail.com</Details>
      <Details>
        <span className={classes.linkedin}>
          <a
            href="https://www.linkedin.com/in/shammo-chanda-32a012b1/"
            target="__blank"
          >
            LinkedIn
          </a>
        </span>
      </Details>
    </div>
  );
};

export default ContactBlurb;
