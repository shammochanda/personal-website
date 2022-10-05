import { Fragment } from "react";
import Head from "next/head";

const MetaHead = (props) => {
  return (
    <Head>
      <title>{props.children}</title>
      <meta name="description" content={props.metacontent} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
    </Head>
  );
};

export default MetaHead;
