import React from 'react';
import SideBar from '../SideBar';
import ContentContainer from '../ContentContainer';
import { Helmet } from "react-helmet"

function Layout({ children }) {
  return (
    <div className="flex">
      <Helmet>
          <meta charSet="utf-8" />
          <title>franz.codes</title>
          <link rel="canonical" href="https://franz.codes" />
        </Helmet>
      <SideBar />
      <ContentContainer>  
        <div class="wotfard">
          {children}
        </div>
      </ContentContainer>
    </div>
  );
}
  
export default Layout;