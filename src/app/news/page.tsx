'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

async function getData() {
  const res = await fetch('http://localhost:3000//api/posts', {
    cache: 'no-store',
  });
  if (!res.ok) {
    console.log(res);
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const News = async () => {
  const data = await getData();
  return (
    <div className="px-20 mt-10">
      {data.map((item) => (
        <Link href={`/news/${item._id}`} key={item.id} className="flex flex-row m-5">
          <Image
            className={styles.newimage}
            src={item.image}
            width={130}
            height={130}
            alt="News Photo"></Image>
          <div className="flex flex-col ml-4 max-w-2xl">
            <h1 className="font-bold ">{item.title}</h1>
            <p>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default News;
