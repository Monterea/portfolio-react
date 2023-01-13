import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

import Layout from "./components/Layout";
import Fallback from "./components/Fallback";
const Home = React.lazy(() => import("./components/Home"));

function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
