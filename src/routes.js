import React, { lazy, Suspense } from "react";
import { CircularProgress } from "@mui/material";

import ErrorBoundary from "components/ErrorBoundary";

const Notes = lazy(() => import("containers/Notes"));

function LazyNotes(props) {
  return (
    <Suspense fallback={<CircularProgress />}>
      <ErrorBoundary>
        <Notes {...props} />
      </ErrorBoundary>
    </Suspense>
  );
}

const allRoutes = [
  {
    path: "/notes",
    name: "app",
    element: <LazyNotes />,
    layout: "app",
  },
];

export default allRoutes;
