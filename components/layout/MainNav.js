import { useEffect, useState } from "react";
import Link from "next/link";
import Hamburger from "../hamburger/hamburger";
import { useMediaQuery } from "react-responsive";
import classes from "./MainNav.module.css";

const MainNav = (props) => {
  const [showList, setShowList] = useState(false);

  const hamburgerHandler = (event) => {
    setShowList(!showList);
  };

  let change = useMediaQuery({ query: "(min-width: 551px)" });

  useEffect(() => {
    if (change) {
      setShowList(false)
    }
  }, [change])

  return (
    <header className={classes.header}>
      <span className={classes.logo}>
        <Link href="/">
          <a>Shammo</a>
        </Link>
      </span>
      <nav>
        <ul className={classes.biglist}>
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
        <ul className={classes.smalllist}>
          <li className={classes.resume}>
            <Link href="/resume.pdf">
              <a target="__blank">Resume</a>
            </Link>
          </li>
          <li className={classes.hamburger}>
            <div onClick={hamburgerHandler}>
              <Hamburger toggle={showList} />
            </div>
          </li>
        </ul>
        <ul className={`${classes.hide} ${showList && classes.dropdown}`}>
          <li className={classes.nav}>
            <Link href="/about">
              <a onClick={hamburgerHandler}>About</a>
            </Link>
          </li>
          <li className={classes.nav}>
            <Link href="/projects">
              <a onClick={hamburgerHandler}>Projects</a>
            </Link>
          </li>
          <li className={classes.nav}>
            <Link href="/contact">
              <a onClick={hamburgerHandler}>Contact</a>
            </Link>
          </li>
          <li className={`${classes.nav} ${classes.hidden}`}>
            <Link href="/resume.pdf">
              <a onClick={hamburgerHandler} target="__blank">Resume</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
