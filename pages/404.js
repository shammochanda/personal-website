import { Fragment } from "react";
import Head from "next/head";
import NotFoundBlurb from "../components/blurbs/notfoundblurb";

const Home = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Shammo Chanda</title>
        <meta name="description" content="Shammo's Portfolio" />
      </Head>
      <NotFoundBlurb />
    </Fragment>
  );
};

export default Home;