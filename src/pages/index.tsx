import { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";

const Index: NextPage<{}> = () => {
  return (
    <Fragment>
      <Head>
        <title>Ottta's</title>
        <meta name="description" content="Ottta's the bla bla bla..." />
      </Head>
      <div>
        <h1>Ottta's</h1>
        <p>Progress...</p>
      </div>
      <style jsx>{`
        div {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        h1 {
          margin: 0;
          font-size: 10rem;
          letter-spacing: -1rem;
          line-height: 0.9;
        }
        p {
          margin: 0;
          padding-left: 1rem;
        }
      `}</style>
    </Fragment>
  );
};

export default Index;
