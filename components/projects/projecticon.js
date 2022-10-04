// import { Fragment } from "React";
import classes from "./projecticon.module.css";

const ProjectIcon = (props) => {
  return (
    <div className={classes.proj}>
      <span className={classes.site}>
        <a href={props.siteLink} target="__blank">
          {props.children}
        </a>
      </span>{" "}
      |{" "}
      <a className={classes.github} href={props.githubLink} target="__blank">
        Github
      </a>
    </div>
  );
};

export default ProjectIcon;