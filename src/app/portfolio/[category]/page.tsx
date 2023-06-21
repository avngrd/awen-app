import React from 'react';
import Image from 'next/image';

const Category = ({ params }) => {
  return (
    <div className="flex justify-between mt-10">
      <div className=" max-w-lg">
        <p>
          DeFi, short for Decentralized Finance, refers to a rapidly growing movement within the
          cryptocurrency and blockchain space. It encompasses a range of financial applications and
          platforms that are built on decentralized networks, aiming to provide traditional
          financial services without the need for intermediaries like banks or other centralized
          authorities.
        </p>
      </div>
      <div>
        <Image src="/defi.jpeg" width={500} height={500} alt="defi"></Image>
      </div>
    </div>
  );
};

export default Category;
