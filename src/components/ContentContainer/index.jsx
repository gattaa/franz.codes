import React from 'react';
import TopNavigation from '../TopNavigation';
import{ BsPlusCircleFill } from 'react-icons/bs';

// import { useState } from 'react';
import io from '../../images/io.jpg';

const ContentContainer = ({ children }) => {
  return (
    <div className='content-container h-[200rem] pl-20'>
      {/*<TopNavigation />*/}
      {children}
    </div>
  );
};


const PlusIcon = () => (
  <BsPlusCircleFill
    size='22'
    className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
  />
);

export default ContentContainer;
