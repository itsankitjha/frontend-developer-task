import React, { lazy, Suspense } from "react";
import { CircularProgress } from "@mui/material";

import ErrorBoundary from "components/ErrorBoundary";

const Auth = lazy(() => import("containers/Auth"));
const Feeds = lazy(() => import("containers/Feeds"));

function LazyAuth(props) {
  return (
    <Suspense fallback={<CircularProgress />}>
      <ErrorBoundary>
        <Auth {...props} />
      </ErrorBoundary>
    </Suspense>
  );
}
function LazyFeeds(props) {
  return (
    <Suspense fallback={<CircularProgress />}>
      <ErrorBoundary>
        <Feeds {...props} />
      </ErrorBoundary>
    </Suspense>
  );
}

const allRoutes = [
  {
    path: "/auth",
    name: "auth",
    element: <LazyAuth />,
    layout: "app",
  },
  {
    path: "/feeds",
    name: "feeds",
    element: <LazyFeeds />,
    layout: "app",
  },
];

export default allRoutes;
