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
        siteLink="https://color-swatches.vercel.app/"
        githubLink="https://github.com/shammochanda/color-swatches"
      >
        Color Swatches
      </ProjectIcon>
      <ProjectIcon
        siteLink="https://gym-journal-web-app.vercel.app/"
        githubLink="https://github.com/shammochanda/gym-journal-web-app"
      >
        Gym Journal - Work In Progress
      </ProjectIcon>
    </div>
  );
};

export default ProjectBlurb;
