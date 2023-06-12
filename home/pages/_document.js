import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          {/* <Link legacyBehavior rel="shortcut icon" href="/img/brand/favicon.ico" /> */}
          {/* <Link legacyBehavior
            rel="apple-touch-icon"
            sizes="76x76"
            href="/img/brand/apple-icon.png"
          /> */}
        </Head>
        <body className="text-slate-700 antialiased">
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
