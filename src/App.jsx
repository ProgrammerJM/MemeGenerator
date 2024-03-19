import Header from './components/Header';
import Meme from './components/Meme';
import Footer from './components/Footer';
import { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }
  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Meme darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;
