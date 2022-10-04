import { Fragment } from "react";
import Head from "next/head";
import AboutBlurb from "../components/blurbs/aboutblurb";

const Home = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Shammo Chanda</title>
        <meta name="description" content="Shammo's Portfolio" />
      </Head>
      <AboutBlurb />
    </Fragment>
  );
};

export default Home;
