import React from 'react';
import AboutUs1 from '../../components/About-us1';
import ContactSection from '../../components/Contact-section';
import Footer from '../../components/Footer';
import IntroWithSlider1 from '../../components/Intro-with-slider1';
import Navbar from '../../components/Navbar';
import Services4 from '../../components/Services4';
import Testimonials1 from '../../components/Testimonials1';
import DarkTheme from '../../layouts/Dark';

const Homepage4 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + 'px';
      }
    }, 1000);
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add('nav-scroll');
    } else {
      navbar.classList.remove('nav-scroll');
    }
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add('nav-scroll');
      } else {
        navbar.classList.remove('nav-scroll');
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider1 sliderRef={fixedSlider} />
      <div ref={MainContent} className='main-content'>
        <AboutUs1 />
        <Services4 withBG withPadding />
        <Testimonials1 withBG imgSrc='/img/pattern.png' />
        <ContactSection />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default Homepage4;
