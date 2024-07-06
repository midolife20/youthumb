// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            name="description"
            content="YouTube Thumbnail Extractor - Get free thumbnail image of any YouTube videos in Full HD, HD, SD, and small sizes."
          />
          <title>YouTube Thumbnail Extractor</title>
          <meta
            property="og:title"
            content="YouTube Thumbnail Extractor"
          />
          <meta
            property="og:description"
            content="Get free thumbnail image of any YouTube videos in Full HD, HD, SD, and small sizes."
          />
          <meta property="og:type" content="website" />
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
          {/* Link your styles directly here */}
          <style>{`
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              padding: 20px;
              max-width: 800px;
              margin: 0 auto;
            }

            header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 1px 0;
              border-bottom: 1px solid #ccc;
            }

            .logo img {
              height: 80px; /* Adjust height as needed */
            }

            h1, h2 {
              color: #333;
            }

            p {
              margin-bottom: 20px;
            }

            .content {
              margin-top: 20px;
            }

            .separator {
              width: 100%;
              height: 1px;
              background-color: #FF5757;
              margin: 20px 0;
            }

            footer {
              margin-top: 40px;
              padding-top: 20px;
              border-top: 1px solid #ccc;
              text-align: center;
              color: #FF5757;
            }

            footer a {
              color: #777;
              text-decoration: none;
              margin: 0 10px;
            }

            footer a:hover {
              text-decoration: underline;
              color: #333;
            }
          `}</style>
          <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-232117363-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-232117363-1');
</script>

        </Head>
        <body>
          <header>
            <a href="/">
              <div className="logo">
                <img src="https://i.ibb.co/rG648zG/Untitled-1000-x-100-px.png" alt="Logo" />
              </div>
            </a>
          </header>
          <Main />
          <NextScript />

          <section className="content">
            {/* Separator before the first line of text */}
            <div className="separator"></div>
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

          <footer>
            <p>&copy; {new Date().getFullYear()} YouTube Thumbnail Extractor. All rights reserved.</p>
            <nav>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Contact Us</a>
            </nav>
          </footer>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
