import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />

        <body className="min-h-screen font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
