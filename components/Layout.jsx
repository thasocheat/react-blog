import React from 'react';
import { Header } from './';
import { Navbar } from './';
import { Footer } from './';

const Layout = ({ children }) => {
  return (
    <div className='bg-gray-100'>
        <Navbar/>
        {/* <Header/> */}
        {children}
        <Footer/>
    </div>
  )
}

export default Layout