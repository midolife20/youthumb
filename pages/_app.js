import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Youtube Thumbnail Extractor"
        description="Download high-quality thumbnails from YouTube videos."
        canonical="https://ru.ytthumbnailextractor.com"
        openGraph={{
          url: "https://ru.ytthumbnailextractor.com",
          title: "Youtube Thumbnail Extrator",
          description: "Download high-quality thumbnails from YouTube videos.",
          site_name: "Youtube Thumbnail Extractor",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
