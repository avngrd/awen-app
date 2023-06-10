import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="flex justify-between columns-2">
      <div className="flex justify-between items-center text-blue-700 rounded-lg p-2 ">
        <Image
          className="mr-3 drop-shadow-3xl"
          src="/favicon.svg"
          width={30}
          height={30}
          alt="Awen"></Image>
        ©2023 Awen. All rights reserved
      </div>
      <div>right</div>
    </div>
  );
};

export default Footer;
