import React from "react";

const Navbar = () => {
  return (
    <>
      <div className = 'nav-wrapper'>
        <a href = '#'>

          <div className ='dots-wrapper'>
            <div className = 'browser-dot' id = 'dot-1'></div>
            <div className = 'browser-dot' id = 'dot-2'></div>
            <div className = 'browser-dot' id = 'dot-3'></div>
          </div>

        </a>
        <ul>
          <li>
            <a href = '#contacts' id = 'contacts-nav'>Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
