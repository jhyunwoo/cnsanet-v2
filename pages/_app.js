import "../styles/globals.css";
import Head from "next/head";
import BottomCopyright from "../components/BottomCopyright";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>CNSA</title>
      </Head>
      <Component {...pageProps} />
      <BottomCopyright />
    </div>
  );
}

export default MyApp;
