import React from 'react';

const layout = ({ children }) => {
  return (
    <div className="px-20 mt-20">
      <h1 className="font-bold text-4xl text-white">Читайте наши работы о криптовалюте!</h1>
      {children}
    </div>
  );
};

export default layout;
