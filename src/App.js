import React, { UseContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import ProtectedRoute from "./common/protected route";

import FixedNav from "./components/fixed nav/fixed nav.jsx";
import SideNav from "./components/side nav/side nav.jsx";
import MoviesList from "./components/movies list/moviesList";
import NotFound from "./components/not found/notFound";
import Movies from "./components/all movies/movies";
import Form from "./components/form/form";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <div className="parent-flex">
        <Router>
          <Routes>
            <Route path="/login" element={<Form />} />
          </Routes>
          <FixedNav />
          <div className="layout">
            <SideNav />
            <main className="main" id="main">
              <Routes>
                <Route element={<ProtectedRoute />}>
                  <Route path="/movies" element={<Movies />} />
                  <Route path="/moviesList" element={<MoviesList />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </main>
          </div>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
