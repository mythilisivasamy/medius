import React, { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
const Header = () => {
  const navRef = useRef(null);
  const [index, setIndex] = useState();
  const handleClick = () => {
    flushSync(() => {
      navRef.current.style.display = 'block';
    });
  };

  const handleHideMenu = () => {
    flushSync(() => {
      setIndex(null);
      navRef.current.style.display = 'none';
    });
  };

  const handleRef = (e, idx) => {
    e.stopPropagation();
    setIndex(idx);
  };

  return (
    <header id="header" className="header  fixed-top">
      <div className="container-fluid position-relative d-flex justify-content-between">
        <div className="d-flex align-items-center position-relative">
          <a href="index.html" className="logo">
            <h1>Better</h1>
          </a>
          <nav className="navmenu" id="navmenu">
            <ul ref={navRef} className="d-xl-flex">
              <li className="dropdown">
                <span className=" d-xl-none">
                  <a href="./" className="better">
                    Better
                  </a>
                  <i className="bi bi-x-lg better" onClick={handleHideMenu}></i>
                </span>
              </li>
              <li className="dropdown">
                <span className={index === 0 ? 'menu-active' : ''}>
                  <a href="./">Buy</a>
                  <i
                    className="bi bi-arrow-right d-xl-none menu-toggle"
                    onClick={(e) => handleRef(e, 0)}
                  ></i>
                </span>
                <ul>
                  <li className="dropdown-menu">
                    <span>Apply now</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                  <li className="dropdown-menu">
                    <span>Purchase rate</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                  <li className="dropdown-menu">
                    <span>Affordability calculator</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                  <li className="dropdown-menu">
                    <span>Mortgage calculator</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                  <li className="dropdown-menu">
                    <span>Rent vs buy calculator</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                  <li className="dropdown-menu">
                    <span>Find an Agent </span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                  <li className="dropdown-menu">
                    <span>VA loans</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                  <li className="dropdown-menu">
                    <span>Learning center</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <span className={index === 1 ? 'menu-active' : ''}>
                  <a href="./">Refinance</a>
                  <i
                    className="bi bi-arrow-right d-xl-none menu-toggle"
                    onClick={(e) => handleRef(e, 1)}
                  ></i>
                </span>
                <ul>
                  <li className="dropdown-menu">
                    <span>Apply now</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                  <li className="dropdown-menu">
                    <span>Refinance rate</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                  <li className="dropdown-menu">
                    <span>cash-out refinance calculator</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                  <li className="dropdown-menu">
                    <span>Learning center</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <span className={index === 2 ? 'menu-active' : ''}>
                  <a href="./">HELOC</a>
                  <i
                    className="bi bi-arrow-right d-xl-none menu-toggle"
                    onClick={(e) => handleRef(e, 2)}
                  ></i>
                </span>
                <ul>
                  <li className="dropdown-menu">
                    <span>Apply now</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                  <li className="dropdown-menu">
                    <span>calculate your cash</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                  <li className="dropdown-menu">
                    <span>HELOC vs Cash-ot refinance</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                  <li className="dropdown-menu">
                    <span>Learning center</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <span className={index === 3 ? 'menu-active' : ''}>
                  <a href="./">Rates</a>
                  <i
                    className="bi bi-arrow-right d-xl-none menu-toggle"
                    onClick={(e) => handleRef(e, 3)}
                  ></i>
                </span>
                <ul>
                  <li className="dropdown-menu">
                    <span>Puchase mortgage rate</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                  <li className="dropdown-menu">
                    <span>Refinance rate</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                  <li className="dropdown-menu">
                    <span>Refinance cash-out calculator</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                  <li className="dropdown-menu">
                    <span>HELOC Rate</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                  <li className="dropdown-menu">
                    <span>purchase VA Rate</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <span className={index === 4 ? 'menu-active' : ''}>
                  <a href="./">Better+</a>
                  <i
                    className="bi bi-arrow-right d-xl-none menu-toggle"
                    onClick={(e) => handleRef(e, 4)}
                  ></i>
                </span>
                <ul>
                  <li className="dropdown-menu">
                    <span>Get insurance</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                  <li className="dropdown-menu">
                    <span>Title and Closing</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                  <li className="dropdown-menu">
                    <span>Better Attorney match</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                  <li className="dropdown-menu">
                    <span>Learning center</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                  <li className="dropdown-menu better-duo">
                    <span>Better Agent match</span>
                    <span className="for-agents">For Agents</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                  <li className="dropdown-menu better-duo">
                    <span>Better Duo</span>
                    <span className="for-agents">For Agents</span>
                    <i className="bi bi-arrow-right-short"></i>
                  </li>
                </ul>
              </li>
              <li className=" dropdown d-xl-none ">
                <p className="callus">
                  <i className="bi bi-telephone-fill"></i>
                  Call us anytime at
                  <span>(415) 523 88371</span>
                </p>
              </li>
              <li className=" dropdown d-xl-none ">
                <span className="get-started">
                  <p>Get started</p>
                  <span>3 min | no credit impact</span>
                </span>
              </li>
              <li className=" dropdown d-xl-none ">
                <span className="sign-in">
                  <p>Sign in</p>
                  <i className="bi bi-person-fill"></i>
                </span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="d-flex align-items-center signin">
          <i className="bi bi-telephone-fill"></i>
          <span className="d-none d-md-block">Sign in</span>
          <i
            className="mobile-nav-toggle d-xl-none bi bi-list"
            onClick={handleClick}
          ></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
