import "../styles/globals.css";
import Head from "next/head";
import BottomCopyright from "../components/BottomCopyright";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <div className="bg-slate-50 dark:bg-slate-900 h-full">
        <Head>
          <title>CNSA</title>
        </Head>
        <Component {...pageProps} />
        <BottomCopyright />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
