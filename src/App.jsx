import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ✅ Case-sensitive import (Check spelling + capital letters)
import Student from './Components/Students';
import Favourit from './Components/Favourit';
import Navbar from './Components/Navbar';

import ArrContextProvider from './Arrcontext';

function App() {
  return (
    <ArrContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/FavouritList" element={<Favourit />} />
        </Routes>
      </BrowserRouter>
    </ArrContextProvider>
  );
}

export default App;
