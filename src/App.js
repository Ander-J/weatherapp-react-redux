import React from "react";
import { Outlet, Link, BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.css";
import Header from "./pages/Header";
import List from "./pages/List";
import NoPage from "./pages/NoPage";
import View from "./pages/View";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<List />} />
          <Route path="view/:id" element={<View />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
