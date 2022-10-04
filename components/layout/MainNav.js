import Link from "next/link";
import classes from "./MainNav.module.css";

const MainNav = (props) => {
  return (
    <header className={classes.header}>
      <span className={classes.logo}>
        <Link href="/">
          <a>Shammo</a>
        </Link>
      </span>
      <nav>
        <ul>
          <li className={classes.nav}>
            <Link href="/about">About</Link>
          </li>
          <li className={classes.nav}>
            <Link href="/projects">Projects</Link>
          </li>
          <li className={classes.nav}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={classes.resume}>
            <Link href="/resume.pdf">
              <a target="__blank">Resume</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
