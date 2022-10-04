import { Fragment } from "react";
import Details from "../details";
import Headings from "../headings"
import classes from "./blurb.module.css";

const AboutBlurb = (props) => {
  return (
    <div className={classes.main}>
      <Headings>About Me</Headings>
      <Details>
        I recently graduated from UCLA and am currently looking for a job as a frontend developer. I am 
        familiar with the React framework, as well as associated frameworks such as Next.js and React Router. 
        I believe in simple, yet eye-catching design that makes for an uncomplicated user experience. As a 
        potential member of your team, I look forward to working closely with others to further a collective goal.
      </Details>
    </div>
  );
};

export default AboutBlurb;