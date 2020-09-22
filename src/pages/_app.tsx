import "../styles/global.scss";
import App from "next/app";
import { Fragment } from "react";

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Fragment>
        <Component {...pageProps} key={router.route} />
      </Fragment>
    );
  }
}
