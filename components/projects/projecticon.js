// import { Fragment } from "React";
import Link from "next/link";
import classes from "./projecticon.module.css";

const ProjectIcon = (props) => {
  return (
    <div className={classes.proj}>
      <span className={classes.site}>
        {props.same ? (
          <Link href="/">{props.children}</Link>
        ) : (
          <a href={props.siteLink} target="__blank">
            {props.children}
          </a>
        )}
      </span>{" "}
      |{" "}
      <a className={classes.github} href={props.githubLink} target="__blank">
        Github
      </a>
    </div>
  );
};

export default ProjectIcon;
