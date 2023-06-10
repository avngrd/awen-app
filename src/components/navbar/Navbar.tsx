import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  interface ILink {
    id: number;
    title: string;
    url: string;
  }

  const linksArray: ILink[] = [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'Portfolio',
      url: '/dashboard',
    },
    {
      id: 3,
      title: 'Blog',
      url: '/blog',
    },
    {
      id: 4,
      title: 'About',
      url: '/about',
    },
    {
      id: 5,
      title: 'Contact',
      url: '/contact',
    },
    {
      id: 6,
      title: 'Dashboard',
      url: '/dashboard',
    },
  ];

  return (
    <div className="p-6 flex items-center justify-between">
      <Link
        href="/"
        className="font-bold text-2xl flex items-center drop-shadow-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">
        <Image className="mr-3" src="/favicon.svg" width={35} height={35} alt="Awen"></Image> Awen
      </Link>
      <div>
        {linksArray.map((link) => (
          <Link
            href={link.url}
            key={link.id}
            className="mr-5 text-base ease-in duration-300 hover:text-blue-700 ">
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
