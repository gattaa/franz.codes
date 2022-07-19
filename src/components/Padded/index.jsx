import React from 'react';

function Padded( { children } ) {
  return (
    <div className="px-4 md:px-20">
      {children}
    </div>
  );
}

export default Padded;
