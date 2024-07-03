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
          <title>YouTube Thumbnail Extractor</title>
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Your additional text content */}
          <section>
            <h1>YouTube Thumbnail Extractor</h1>
            <p>
              Get free thumbnail images of any YouTube videos in Full HD (1080), HD (720), SD, and small sizes.
            </p>
            <h2>What is the use of this YouTube Thumbnail Grabber website?</h2>
            <p>
              People use this YouTube thumbnail downloader website for getting thumbnails from YouTube videos. They can be used in presentations, animations, or various other activities.
            </p>
            <h2>How to use this YouTube thumbnail extractor website?</h2>
            <p>
              Simply copy the YouTube video link whose thumbnail you want, paste it into the input box, and the website will automatically generate thumbnails in different sizes. Click the download button to save the thumbnail to your system.
            </p>
            <p>
              For Android users, save the images directly. iPhone users may need alternative methods.
            </p>
            <h2>Is it legal to download YouTube thumbnails?</h2>
            <p>
              Yes, it is legal to download YouTube thumbnails, but you should seek permission from the content creator if you plan to reuse them.
            </p>
            <h2>Compatibility of this YT thumbnail grabber website</h2>
            <p>
              This YouTube thumbnail downloader works on most devices, including Android phones, laptops, and desktops. iPhone users may face issues unless using a jailbroken device.
            </p>
            <h2>Is there any Copyright risk on YouTube Thumbnails?</h2>
            <p>
              While downloading YouTube thumbnails is legal, the copyright remains with the respective video owner. Always ask for permission before reuse.
            </p>
            <h2>Is reusing YouTube thumbnails SEO friendly?</h2>
            <p>
              No, reusing YouTube thumbnails is not SEO friendly as Google indexes them. Make your thumbnails unique using software like Photoshop for better SEO results.
            </p>
          </section>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
