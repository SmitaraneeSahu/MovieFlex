import React from 'react';
import { useState, useEffect } from 'react';
import AllRoutes from "./routes/AllRoutes";
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import './index.css';
import Card from './components/Card';


function App() {
  const [darkMode, setDarkMode] = useState( JSON.parse(localStorage.getItem("darkMode")) || false);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if(darkMode){
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <div>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <AllRoutes darkMode={darkMode}/>
      <Footer/>
    </div>
  );
}

export default App;
