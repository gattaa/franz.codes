import React from 'react';
import NavBar from '../NavBar';
import { Helmet } from "react-helmet"
import Footer from "../Footer";

function Layout({ children, con }) {
  let i = children;
  if(con === "false"){
      i = <div className="bg-gray-900 overflow-hidden">{children}<Footer /></div>
  }else{
      i = <div className='content-container'> {children}<Footer /> </div>
  }
  return (
    <div className="bg-mint wotfard min-h-screen transition-all">
      <Helmet htmlAttributes={{
          lang: 'en',
      }}>
          <meta charSet="utf-8" />
          <title>franz.codes</title>
          <meta name="description" content={"dev portfolio ;)"}/>
          <link rel="canonical" href="https://franz.codes" />
        </Helmet>
      <NavBar />
      {i}
    </div>
  );
}
  
export default Layout;