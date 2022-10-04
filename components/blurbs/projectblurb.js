import Details from "../details";
import Headings from "../headings";
import classes from "./blurb.module.css";
import ProjectIcon from "../projects/projecticon";

const ProjectBlurb = (props) => {
  return (
    <div className={classes.main}>
      <Headings>My Projects</Headings>
      <ProjectIcon
        siteLink="https://www.google.com"
        githubLink="https://www.github.com"
      >
        Some Project
      </ProjectIcon>
      <ProjectIcon
        siteLink="https://www.google.com"
        githubLink="https://www.github.com"
      >
        Some Project
      </ProjectIcon>
      <ProjectIcon
        siteLink="https://www.google.com"
        githubLink="https://www.github.com"
      >
        Some Project
      </ProjectIcon>
    </div>
  );
};

export default ProjectBlurb;