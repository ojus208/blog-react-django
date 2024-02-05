import React, { useState, useEffect } from "react";
import "../assets/css/home.css";
import Header from "../component/header";
import Blog from './blog';
import { Routes, Route} from "react-router-dom";
import Homecontent from "./homecontent";


export default function Homepage() {

  useEffect(() => {
    document.title="OPPS - home page"
  }, [])
  


  return (
    <div className="home">
      <Header />
      <Routes>
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/" element={<Homecontent />} />
      </Routes>

    </div>
  );
}


