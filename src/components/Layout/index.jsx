import React from 'react';
import SideBar from '../SideBar';
import { Helmet } from "react-helmet"

function Layout({ children, con }) {
  let i = children;
  if(con == "false"){
      i = <div className="bg-gray-900 overflow-hidden">{children}<Footer /></div>
  }else{
      i = <div className='content-container wotfard'> {children}<Footer /> </div>
  }
  return (
    <div className="bg-mint">
      <Helmet>
          <meta charSet="utf-8" />
          <title>franz.codes</title>
          <link rel="canonical" href="https://franz.codes" />
        </Helmet>
      <SideBar />
      {i}
    </div>
  );
}
  
export default Layout;