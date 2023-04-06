import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import routes from "./pages/routes"
import "./App.css"
import Login from "./pages/Home/components/Navbar/Login/login.js"
// @ts-ignore
import { Layout } from "#components"
import Signup from "./pages/Home/components/Navbar/SignUp/signup"
import TourDetail from "./pages/Home/components/Tours/TourDetail/tourdetail"
import DenyTour from "./pages/DenyTour/denytour"

interface RouteProps {
  path: string
  componenet: React.ReactNode
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* @ts-ignore */}
          {routes.map(({ path, componenet }: RouteProps) => {
            return <Route path={path} element={componenet} key={path} />
          })}
          // <Route path="/signup" element={<Signup />} />; //{" "}
          <Route path="/tourdetail" element={<TourDetail />} />;
          <Route path="/denytour" element={<DenyTour />} />;
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
