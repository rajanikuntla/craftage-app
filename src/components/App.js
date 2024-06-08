import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./Categories";
import Footer from "./Footer";
import Items from "./Items";
import Login from "./Login";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" exact element={<Categories />}></Route>
            <Route path="/send-otp" exact element={<Login />}></Route>
            <Route path="/items/:category_id" exact element={<Items />}></Route>
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
