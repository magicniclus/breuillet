import "../styles/globals.css";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("1598776293984358"); //
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-TDB6JT84",
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
