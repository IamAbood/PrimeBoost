/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Split from '../../Split';
import Link from 'next/link';
import appData from '../../../data/app.json';
import handleFullScreenNavbar from '../../../common/handleFullScreenNavbar';

const NavbarFullMenu = ({ theme, lr }) => {
  React.useEffect(() => {
    handleFullScreenNavbar();
  }, []);
  return (
    <>
      <div
        id='navi'
        className={`topnav ${theme ? (theme === 'light' ? 'light' : '') : ''}`}
      >
        <div className='container-fluid'>
          <div className='logo'>
            <Link href='/'>
              <a>
                {theme ? (
                  theme === 'light' ? (
                    <img src={`${appData.darkLogo}`} alt='logo' />
                  ) : (
                    <img src={`${appData.lightLogo}`} alt='logo' />
                  )
                ) : (
                  <img src={`${appData.lightLogo}`} alt='logo' />
                )}
              </a>
            </Link>
          </div>
          <div className='menu-icon'>
            <span className='icon'>
              <i></i>
              <i></i>
            </span>
            <Split>
              <span className='text' data-splitting>
                <span className='menu-text'>Menu</span>
              </span>
            </Split>
          </div>
        </div>
      </div>

      <div className='hamenu'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9 col-md-8'>
              <div className='menu-links'>
                <ul className='main-menu'>
                  <li>
                    <ul>
                      <li>
                        <div className='o-hidden'>
                          <Link href='/'>
                            <a className='link'>
                              <span className='nm'>01.</span>Home
                            </a>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className='o-hidden'>
                      <Link href='/about/about-dark'>
                        <a className='link'>
                          <span className='nm'>02.</span>About Us
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className='o-hidden'>
                      <Link href='/works/works-dark'>
                        <a className='link'>
                          <span className='nm'>03.</span>Protfolio
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link href='/showcase2/showcase2-dark'>
                      <a className='link'>
                        <span className='nm'>04.</span>Showcases
                      </a>
                    </Link>
                  </li>

                  <li>
                    <div className='o-hidden'>
                      <Link href='/contact/contact-dark'>
                        <a className='link'>
                          <span className='nm'>05.</span>Contact
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-4'>
              <div className='cont-info'>
                <div className='item'>
                  <h6>Phone :</h6>
                  <p>+0123456789</p>
                </div>
                <div className='item'>
                  <h6>Address :</h6>
                  <p>
                    541 London Ave, Palo Alto, CA 94301,
                    info@primeboostmedia.com
                  </p>
                </div>
                <div className='item'>
                  <h6>Email :</h6>
                  <p>
                    <a href='#0'>info@primeboostmedia.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFullMenu;
