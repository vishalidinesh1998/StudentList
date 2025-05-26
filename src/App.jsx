import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Student from './Components/students';
import Favourit from './Components/favourit';
import { ArrContext } from './Arrcontext';
import ArrContextProvider from './Arrcontext';
import Navbar from './Components/Navbar';
function App() {


  return (



    <ArrContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Student />} />
          <Route path="/FavouritList" element={<Favourit />} />
        </Routes>
      </BrowserRouter>
    </ArrContextProvider>

  );
}

export default App;
