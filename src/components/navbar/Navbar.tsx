import Link from 'next/link';
import React from 'react';

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
      id: 4,
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
    <div>
      <Link href="/">Awen</Link>
    </div>
  );
};

export default Navbar;
