import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = ({ children }: any) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gradient-to-t from-main">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
