import React from 'react';
import {Route, Routes} from "react-router-dom";

import Layout from "@/components/layout";
import Loading from "@/components/loading";
import Home from '@/pages/home'
import useToken from './useToken';

const NoMatch = React.lazy(() => import("@/pages/404"));
const MyRecord = React.lazy(() => import("@/pages/my-record"));
const Column = React.lazy(() => import("@/pages/column"));
const Login = React.lazy(() => import("@/pages/login"));

const App = () => {
  const {token, setToken} = useToken();
  if (!token && window.location.pathname.indexOf('column') < 0) {
    return <Login setToken={setToken}/>
  }


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route
            path="login"
            element={
              <React.Suspense fallback={<Loading/>}>
                <Login setToken={setToken}/>
              </React.Suspense>
            }
          />
          <Route
            path="my-record"
            element={
              <React.Suspense fallback={<Loading/>}>
                <MyRecord/>
              </React.Suspense>
            }
          />
          <Route
            path="column"
            element={
              <React.Suspense fallback={<Loading/>}>
                <Column/>
              </React.Suspense>
            }
          />
          <Route path="*" element={<NoMatch/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
