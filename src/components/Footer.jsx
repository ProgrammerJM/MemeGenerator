import React from 'react';

export default function Footer(props) {
  return (
    <footer className={props.darkMode ? 'dark' : ''}>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/johnmarktizado/" target="_blank">
          <img src="./LinkedIn.png" className="icons" />
        </a>
        <a href="https://github.com/ProgrammerJM" target="_blank">
          <img src="./GitHub.png" className="icons" />
        </a>
        <a href="https://www.instagram.com/jmjtiz/" target="_blank">
          <img src="./Instagram.png" className="icons" />
        </a>
      </div>
      <div className="footer-me">
        Made with {`<`}3 by<a className="myName">jtiz</a>
      </div>
    </footer>
  );
}
