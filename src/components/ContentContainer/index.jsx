import React from 'react';

// import { useState } from 'react';

const ContentContainer = ({ children }) => {
  return (
    <div className='content-container h-[200rem] px-20'>
      {children}
    </div>
  );
};


export default ContentContainer;
