'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const session = useSession();

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
      url: '/portfolio',
    },
    {
      id: 3,
      title: 'News',
      url: '/news',
    },
    {
      id: 4,
      title: 'Currencies',
      url: '/currencies',
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
    <div className=" px-20 py-6 flex items-center justify-between">
      <Link
        href="/"
        className="font-bold text-2xl flex items-center drop-shadow-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">
        <Image className="mr-3" src="/favicon.svg" width={35} height={35} alt="Awen"></Image> Awen
      </Link>
      <div className="flex flex-row items-center">
        <DarkModeToggle />
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
        {session.status === 'authenticated' && (
          <button
            className="bg-blue-700 text-white rounded-xl ease-out duration-300 px-3 py-1 hover:opacity-75 "
            onClick={() => signOut()}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
