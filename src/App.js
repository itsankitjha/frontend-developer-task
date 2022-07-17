import { Container } from "@mui/material";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import allRoutes from "routes";

function App() {
  const getRoutes = (routes) =>
    routes.map((prop) => (
      <Route path={prop.layout + prop.path} element={prop.element} key={prop.name} />
    ));
  return (
    <Container maxWidth="xl" sx={{ background: "#131319", height: "500vh" }}>
      <Routes>
        {getRoutes(allRoutes)}
        <Route path="/" element={<Navigate to="/app/auth" replace />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There&apos;s nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Container>
  );
}

export default App;
