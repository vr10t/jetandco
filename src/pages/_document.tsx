import Document, {
  Html,
  Head,
  type DocumentProps,
  DocumentContext,
  NextScript,
  Main,
} from "next/document";
import { env } from "~/env.mjs";

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang="en-GB">
        <Head>
          <meta
            property="og:image"
            content={`${env.VERCEL_URL}/og-image.webp`}
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:image"
            content={`${env.VERCEL_URL}/og-image.webp`}
          />

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
