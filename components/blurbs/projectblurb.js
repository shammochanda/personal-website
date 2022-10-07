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
        githubLink="https://github.com/shammochanda/personal-website"
        same={true}
      >
        This Page
      </ProjectIcon>
      <ProjectIcon
        siteLink="https://github.com/shammochanda/gym-journal-web-app"
        githubLink="https://github.com/shammochanda/gym-journal-web-app"
      >
        Gym Journal - Work In Progress
      </ProjectIcon>
    </div>
  );
};

export default ProjectBlurb;
