import { createContext, useContext, useRef, useEffect, useMemo } from "react";
import { AnalyticsBrowser } from "@segment/analytics-next";
import { useRouter } from "next/router";
import useLocalStorage from "@/components/use-localstorage";

const useWriteKey = () =>
  useLocalStorage(
    "segment_playground_write_key",
    process.env.NEXT_PUBLIC_WRITEKEY
  );

const useCDNUrl = () =>
  useLocalStorage("segment_playground_cdn_url", "https://cdn.segment.com");
//

const AnalyticsContext = createContext();

export const AnalyticsProvider = ({ children }) => {
  const [writeKey, setWriteKey] = useWriteKey();
  const [cdnURL, setCDNUrl] = useCDNUrl();

  const analytics = useMemo(() => {
    // console.log(
    //   `AnalyticsBrowser loading...`,
    //   JSON.stringify({ writeKey, cdnURL })
    // );
    return AnalyticsBrowser.load({ writeKey, cdnURL });
  }, [writeKey, cdnURL]);

  return (
    <AnalyticsContext.Provider
      value={{ analytics, writeKey, setWriteKey, cdnURL, setCDNUrl }}
    >
      {children}
      <TrackPage />
    </AnalyticsContext.Provider>
  );
};

// Create an analytics hook that we can use with other components.
export const useAnalytics = () => {
  const result = useContext(AnalyticsContext);
  if (!result) {
    throw new Error("Context used outside of its Provider!");
  }
  return result;
};

function TrackPage() {
  const didMount = useRef(false);
  const router = useRouter();
  const { analytics } = useAnalytics();
  useEffect(() => {
    if (didMount.current) {
      analytics.page();
      console.log("analytics.page();");
    } else {
      didMount.current = true;
    }
  }, [analytics, router]);
  return null;
}
