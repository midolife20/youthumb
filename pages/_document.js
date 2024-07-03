import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          
          {/* Additional meta tags or other headers can go here */}
          <meta name="description" content="YouTube Thumbnail Extractor - Get free thumbnail image of any YouTube videos in Full HD, HD, SD, and small sizes." />
          <title>YouTube Thumbnail Extractor</title>
        </Head>
        <body>
          <Main />
          <NextScript />
          
          {/* Script or other elements specific to your document can be added here */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
