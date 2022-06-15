import "../styles/globals.css";
import BottomBar from "../components/BottomBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <BottomBar />
    </>
  );
}

export default MyApp;
