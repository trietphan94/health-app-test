// import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";

import Layout from "@/components/layout";
import Loading from "@/components/loading";
import Home from '@/pages/home'
const NoMatch = React.lazy(() => import("@/pages/404"));
const MyRecord = React.lazy(() => import("@/pages/my-record"));
const Challenge = React.lazy(() => import("@/pages/challenge"));
const Notice = React.lazy(() => import("@/pages/notice"));
const Login = React.lazy(() => import("@/pages/login"));

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="login"
            element={
              <React.Suspense fallback={<Loading />}>
                <Login />
              </React.Suspense>
            }
          />
          <Route
            path="my-record"
            element={
              <React.Suspense fallback={<Loading />}>
                <MyRecord />
              </React.Suspense>
            }
          />
          <Route
            path="challenge"
            element={
              <React.Suspense fallback={<Loading />}>
                <Challenge />
              </React.Suspense>
            }
          />
           <Route
            path="notice"
            element={
              <React.Suspense fallback={<Loading />}>
                <Notice />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
