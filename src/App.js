import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import Header from './components/Header';
import NavBar from './components/NavBar';
import { AddInventory } from './modules/AddInventory/AddInventory';
import QuaterlyReport from './modules/QuaterlyReport/QuaterlyReport';
import YearlyReport from './modules/YearlyReport/YearlyReport';
import Warehouse from './modules/Warehouse/WarehouseData';
import UpdateInventory from './modules/UpdateInventory/UpdateInventory';
import Cookies from 'js-cookie';

function App() {

  const [csrfToken, setCsrfToken] = useState("")
  useEffect(() => {
    fetch("http://localhost:8000/get_csrf_token/", {
      method: "GET"
    }).then(response => response.json())
      .then((res) => {
        Cookies.set("csrf-token", res.csrf_token, { expires: 7, secure: true })
      })
      .catch((error) => {
        console.log(error)
      });
  }, [])

  return (
    <div className="App">
      <Header />

      {/* <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/addInventory" element={<AddInventory />} />
          <Route exact path="/updateInventory" element={<UpdateInventory />} />
          <Route exact path="/quaterlyReport" element={<QuaterlyReport />} />
          <Route exact path="/yearlyReport" element={<YearlyReport />} />
          <Route exact path="/warehouse" element={<Warehouse />} />
        </Routes>
      </BrowserRouter> */}

    </div>
  );
}

export default App;