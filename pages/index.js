import { Fragment } from "react";
import Head from "next/head";
import MainBlurb from "../components/blurbs/mainblurb";

const Home = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Shammo Chanda</title>
        <meta name="description" content="Shammo's Portfolio" />
      </Head>
      <MainBlurb />
    </Fragment>
  );
};

export default Home;
