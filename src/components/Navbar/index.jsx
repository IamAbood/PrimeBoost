/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import appData from '../../data/app.json';
import {
  handleDropdown,
  handleMobileDropdown,
  handleSearch,
} from '../../common/navbar';

const Navbar = ({ lr, nr, theme }) => {
  React.useEffect(() => {
    handleSearch();
  }, []);
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === 'themeL' ? 'light' : ''
      }`}
    >
      <div className='container'>
        <Link href='/'>
          <a className='logo'>
            {theme ? (
              theme === 'themeL' ? (
                <img ref={lr} src={`${appData.darkLogo}`} alt='logo' />
              ) : (
                <img ref={lr} src={`${appData.lightLogo}`} alt='logo' />
              )
            ) : (
              <img ref={lr} src={`${appData.lightLogo}`} alt='logo' />
            )}
          </a>
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          onClick={handleMobileDropdown}
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='icon-bar'>
            <i className='fas fa-bars'></i>
          </span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          {/* <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link href='/'>
                <a className='nav-link'>Home</a>
              </Link>
            </li>

            <li className='nav-item'>
              <Link href='/showcase2/showcase2-dark'>
                <a className='nav-link'>Showcases</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/about/about-dark'>
                <a className='nav-link'>About</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/works/works-dark'>
                <a className='nav-link'>Portfolio</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/contact/contact-dark'>
                <a className='nav-link'>Contact</a>
              </Link>
            </li>
          </ul> */}
          <div className='search'>
            <span className='icon pe-7s-search cursor-pointer'></span>
            <div className='search-form text-center custom-font'>
              <span className='close pe-7s-close cursor-pointer'></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
