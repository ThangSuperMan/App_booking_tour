import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import routes from "./pages/routes"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
// @ts-ignore
import { Layout } from "#components"
import Signup from "./pages/Home/components/Navbar/SignUp/signup"
import TourDetail from "./pages/Home/components/Tours/TourDetail"
import DenyTour from "./pages/DenyTour/denytour"
import TourRequest from "./pages/Home/components/Navbar/TourRequest/tourrequest"
import ServiceAdmin from "./pages/Home/components/Service/servicead"
import ConfirmTour from "./pages/ConfirmTour/confirmtour"
import "./App.css"

interface RouteProps {
  path: string
  componenet: React.ReactNode
}

const App: React.FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
            <Route path="/tourrequest" element={<TourRequest />} />;
            <Route path="/servicead" element={<ServiceAdmin />} />;
            <Route path="/confirmtour" element={<ConfirmTour />} />;
          </Routes>
        </Layout>
      </BrowserRouter>
    </LocalizationProvider>
  )
}

export default App
