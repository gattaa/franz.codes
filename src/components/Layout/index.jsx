import React from 'react';
import SideBar from '../SideBar';
import ContentContainer from '../ContentContainer';

function Layout({ children }) {
  return (
    <div className="flex">
      <SideBar />
      <ContentContainer>  
          {children}
      </ContentContainer>
    </div>
  );
}
  
export default Layout;