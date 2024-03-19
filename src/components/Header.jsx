import React from 'react';

export default function Header(props) {
  return (
    // <header className="header">
    <nav className={props.darkMode ? 'dark' : ''}>
      <img src="./meme.png" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
    // </header>
  );
}
