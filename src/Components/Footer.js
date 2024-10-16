import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/Logo.svg';


const Footer = () => {
  return (
    <footer className="bg-light py-5 mt-5">
      <div className="container-fluid ps-lg-3 pe-lg-3">
        <div className="row" style={{ paddingLeft: '10%'}}>
          <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
            <h5 className='text-secondary'>Product</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Overview</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Features</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Solutions <span className="badge bg-success rounded-pill">New</span></Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Tutorials</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Pricing</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Releases</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
            <h5 className='text-secondary'>Company</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">About us</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Careers</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Press</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">News</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Media kit</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Contact</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
            <h5 className='text-secondary'>Resources</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Blog</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Newsletter</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Events</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Help centre</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Tutorials</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Support</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
            <h5 className='text-secondary'>Use cases</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Startups</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Enterprise</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Government</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">SaaS centre</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Marketplaces</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Ecommerce</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
            <h5 className='text-secondary'>Social</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Twitter</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">LinkedIn</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Facebook</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">GitHub</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">AngelList</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Dribbble</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
            <h5 className='text-secondary'>Legal</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Terms</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Privacy</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Cookies</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Licenses</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Settings</Link></li>
              <li><Link to="/" className="text-decoration-none fw-bold text-dark footer-link">Contact</Link></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-wrap justify-content-between gap-2 ps-lg-5 pe-lg-5 align-items-center pt-3 mt-2">
          <Link className="d-flex align-items-center text-decoration-none text-dark">
            <Logo width="30" height="30" className="d-inline-block me-2" />
            <span className='fw-bold'>Untitled</span>
          </Link>
          <p className="mt-2">©️ 2077 Untitled UI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
