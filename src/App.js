import React, { UseContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import FixedNav from "./components/fixed nav/fixed nav.jsx";
import SideNav from "./components/side nav/side nav.jsx";
import MoviesList from "./components/movies list/moviesList";
import NotFound from "./components/not found/notFound";
import Movies from "./components/all movies/movies";
import Form from "./components/form/form";

function App() {
  const handleSideNav = () => {
    if (window.innerWidth) {
      
      document.getElementById("side").classList.toggle("disable");
    }
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="parent-flex">
        <Router>
          <Routes>
            <Route path="/login" element={<Form />} />
          </Routes>
          <FixedNav handleSideNav={() => handleSideNav()} />
          <div className="layout">
            <SideNav id="side" handleSideNav={() => handleSideNav()} />
            <main className="main" id="main">
              <Routes>
                <Route path="/movies" element={<Movies />} />
                <Route path="/" element={<Navigate to="/movies" />} />
                <Route path="/moviesList" element={<MoviesList />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
