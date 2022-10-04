import { Fragment } from "react";
import MainNav from "./MainNav";
import classes from "./Layout.module.css"

const Layout = (props) => {
  return (
    <div className="test">
      <MainNav />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;