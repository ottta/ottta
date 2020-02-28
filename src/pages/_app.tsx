import { AppProps } from "next/app";
import { Fragment } from "react";

export default ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Component {...pageProps} />

      <style jsx global>{`
        @font-face {
          font-family: "Favorit Pro", Helvetica, sans-serif;
          font-style: normal;
          src: local("Helvetica"), url("/static/fonts/FavoritPro-Regular.otf");
          font-display: swap;
        }
        :root {
          --main-font: "Favorit Pro", Helvetica, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 0;

          font-family: var(--main-font);
        }
      `}</style>
    </Fragment>
  );
};
