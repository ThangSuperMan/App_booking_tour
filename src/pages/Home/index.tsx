import React from "react"
import { Navbar } from "./components"
import Category from "./components/Category"
import Tours from "./components/Tours"
import Service from "./components/Service/service.js"
import Footer from "./components/Footer/footer"

const Home: React.FC = () => {
  return (
    <div className="home">
      <Navbar />
      <Category />
      <Tours />
      <Service/>
      <Footer/>
    </div>
  )
}

export default Home
