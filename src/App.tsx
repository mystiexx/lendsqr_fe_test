import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loader from "./components/loader";

const Login = lazy(() => import("./pages/auth/login"));
const Users = lazy(() => import("./pages/users"));
const User = lazy(() => import("./pages/user"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/" element={<Navigate to="/user" replace />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
