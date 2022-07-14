import React, { lazy, Suspense } from "react";
import { CircularProgress } from "@mui/material";

import ErrorBoundary from "components/ErrorBoundary";

const Auth = lazy(() => import("containers/Auth"));

function LazyAuth(props) {
  return (
    <Suspense fallback={<CircularProgress />}>
      <ErrorBoundary>
        <Auth {...props} />
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
];

export default allRoutes;
