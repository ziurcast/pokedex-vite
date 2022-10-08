import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = ({ children }: any) => {
  return (
    <div className="bg-pokemon-pattern min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
