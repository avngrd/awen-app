import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex justify-between columns-2 px-20 py-6">
      <div className="flex justify-between items-center text-blue-700 rounded-lg  ">
        <Image
          className="mr-3 drop-shadow-3xl"
          src="/favicon.svg"
          width={30}
          height={30}
          alt="Awen"></Image>
        ©2023 Awen. All rights reserved
      </div>
      <div className="flex flex-row items-center w-60 justify-around">
        <Link className=" ease-linear duration-300 hover:opacity-80" href="/">
          <Image src="/twitter.svg" width={35} height={35} alt="Twitter"></Image>
        </Link>
        <Link className=" ease-linear duration-300 hover:opacity-80" href="/">
          <Image src="/discord.svg" width={35} height={35} alt="Discord"></Image>
        </Link>
        <Link className=" ease-linear duration-300 hover:opacity-80" href="/">
          <Image src="/github.svg" width={35} height={35} alt="Github"></Image>
        </Link>
        <Link className=" ease-linear duration-300 hover:opacity-80" href="/">
          <Image src="/linked.svg" width={35} height={35} alt="LinkedIn"></Image>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
