import React from 'react';

const layout = ({ children }) => {
  return (
    <div className="px-20 mt-20">
      <h1 className="font-bold text-4xl text-blue-700">Our works</h1>
      {children}
    </div>
  );
};

export default layout;
