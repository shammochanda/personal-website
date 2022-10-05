import { Fragment } from "react";
import MetaHead from "../components/headmeta";
import ContactBlurb from "../components/blurbs/contactblurb";

const Home = (props) => {
  return (
    <Fragment>
      <MetaHead metacontent="Shammo's Contact">Contact | Shammo</MetaHead>
      <ContactBlurb />
    </Fragment>
  );
};

export default Home;
