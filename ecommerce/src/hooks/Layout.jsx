import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";
import React from 'react'

const Layout = (props) => {
  return (
    <div>
        <Navbar />
        <ToastContainer autoClose={5000}/>
        {props.children}
        <Footer />
    </div>
  )
}

export default Layout