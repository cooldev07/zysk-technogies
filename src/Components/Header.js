import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/Logo.svg';
import { LuMenu } from 'react-icons/lu';

function Header () {
  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white shadow-sm sticky-top">
      <div className="container-fluid ps-lg-5 pe-lg-5">
        <Link className="navbar-brand d-flex align-items-center">
          <Logo width="30" height="30" className="d-inline-block align-top me-2" />
          <span className='fw-bold'>Untitled</span>
        </Link>

        <button
          className="navbar-toggler border-0 focus:shadow-none p-2" 
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className=""><LuMenu /></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav  gap-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item dropdown">
              <button
                className="btn nav-link dropdown-toggle"
                type="button"
                id="navbarDropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" to="/"> one</Link></li>
                <li><Link className="dropdown-item" to="/">two</Link></li>
                <li><Link className="dropdown-item" to="/">three</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <button
                className="btn nav-link dropdown-toggle"
                type="button"
                id="resourcesDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </button>
              <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                <li><Link className="dropdown-item" to="/">documents</Link></li>
                <li><Link className="dropdown-item" to="/">reference</Link></li>
                <li><Link className="dropdown-item" to="/">blog</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">Pricing</Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <img
                  src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"
                  alt="Avatar"
                  width="40"
                  height="40"
                  className="rounded-circle shadow-sm img-fluid"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
