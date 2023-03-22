import React from "react"
import { Navbar } from "./components"
import Category from "./components/Category"
import Tours from "./components/Tours"

const Home: React.FC = () => {
  return (
    <div className="home">
      <Navbar />
      <Category />
      <Tours />
    </div>
  )
}

export default Home
