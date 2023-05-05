import Document, {
  Html,
  Head,
  type DocumentProps,
  DocumentContext,
  NextScript,
  Main,
} from "next/document";

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang="en-GB">
        <Head>
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Hepta+Slab&family=Poppins&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
