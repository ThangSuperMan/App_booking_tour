import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./pages/routes";
import "./App.css";
import Login from './pages/Home/components/Navbar/Login/login.js'
// @ts-ignore
import { Layout } from "#components";
import Signup from "./pages/Home/components/Navbar/SignUp/signup";

interface RouteProps {
  path: string;
  componenet: React.ReactNode;
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* @ts-ignore */}
          {routes.map(({ path, componenet }: RouteProps) => {
            return <Route path={path} element={componenet} key={path} />;
          })}


          <Route path="/login" element={<Login />}/>;
          <Route path="/signup" element={<Signup />}/>;
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
