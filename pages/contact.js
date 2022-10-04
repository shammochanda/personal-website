import { Fragment } from "react";
import Head from "next/head";
import ContactBlurb from "../components/blurbs/contactblurb";

const Home = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Shammo Chanda</title>
        <meta name="description" content="Shammo's Portfolio" />
      </Head>
      <ContactBlurb />
    </Fragment>
  );
};

export default Home;
