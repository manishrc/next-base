import "../styles/globals.css";
import Segment from "@/components/Segment";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Segment>
        <Component {...pageProps} />
      </Segment>
    </SessionProvider>
  );
}

export default MyApp;
