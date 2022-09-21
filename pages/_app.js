import "../styles/globals.css";
import Segment from "@/components/Segment";

function MyApp({ Component, pageProps }) {
  return (
    <Segment>
      <Component {...pageProps} />
    </Segment>
  );
}

export default MyApp;
