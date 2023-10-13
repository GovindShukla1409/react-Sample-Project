import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import publicRoutes from './routes/publicRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css"

function App() {
  return (
  <BrowserRouter>
  <Routes>
  { publicRoutes.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} exact={true}/>) }
  </Routes>
  </BrowserRouter>
  );
}

export default App;
