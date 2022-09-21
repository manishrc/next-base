import Script from "next/script";
import * as snippet from "@segment/snippet";
import Router from "next/router";

// Track client-side page views with Segment
Router.events.on("routeChangeComplete", (url) => {
  window.analytics.page(url);
});

const DEFAULT_WRITE_KEY = "Ymnydvw4npgFSLcyaEW510mocGDdWYQP";

function renderSnippet() {
  const opts = {
    apiKey: process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY || DEFAULT_WRITE_KEY,
    // note: the page option only covers SSR tracking.
    // Page.js is used to track other events using `window.analytics.page()`
    page: true,
  };

  if (process.env.NODE_ENV === "development") {
    return snippet.max(opts);
  }

  return snippet.min(opts);
}

const Segment = ({ children }) => (
  <>
    {children}
    <Script
      id="segment-script"
      dangerouslySetInnerHTML={{ __html: renderSnippet() }}
    />
  </>
);

export default Segment;
