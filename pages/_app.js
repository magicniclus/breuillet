import "../styles/globals.css";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "AW-11272063965",
    };
    TagManager.initialize(tagManagerArgs);
  }, []);
  return;

  <Component {...pageProps} />;
}

export default MyApp;
