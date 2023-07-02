import React from 'react';
import './TopNav.css';

const TopNav = () => {
  return (
    <section className='top-nav d-lg-flex d-none' >
        <div className='container-xl d-flex justify-content-end p-2 px-xl-2 px-3'>
          <a className='top-nav-link text-white text-decoration-none text-uppercase mx-4' href='#'>student portal</a>
          <a className='top-nav-link text-white text-decoration-none text-uppercase mx-4' href='#'>exams</a>
          <a className='top-nav-link text-white text-decoration-none text-uppercase mx-4' href='#'>profile</a>
          <a className='top-nav-link text-white text-decoration-none text-uppercase mx-4' href='#'>logout</a>

        </div>
    </section>
  )
}
export default TopNav;
