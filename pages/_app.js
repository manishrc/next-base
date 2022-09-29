import "../styles/globals.css";
import { AnalyticsProvider } from "@/components/Segment";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <AnalyticsProvider>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </AnalyticsProvider>
    </>
  );
}

export default MyApp;
