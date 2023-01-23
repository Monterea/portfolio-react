import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

import Layout from "./components/Layout";
import Fallback from "./components/Fallback";
const Home = React.lazy(() => import("./components/Home"));
const Skills = React.lazy(() => import("./components/Skills"));
const Works = React.lazy(() => import("./components/Works"));
const Nested = React.lazy(() => import("./components/Nested"));
const N = React.lazy(() => import("./components/N"));

function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/works" element={<Works />} />
          <Route path="/nested" element={<Nested />} />
          <Route path="/n" element={<N />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
