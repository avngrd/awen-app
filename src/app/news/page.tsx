import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const News = () => {
  return (
    <div className="px-20 mt-10">
      <Link href="/news/testId" className="flex flex-row m-5">
        <Image src="/defi.jpeg" width={200} height={200} alt="News Photo"></Image>
        <div className="flex flex-col ml-4 max-w-2xl">
          <h1 className="font-bold">This new post</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, voluptatibus,
            vero reiciendis excepturi tempore esse libero hic in nulla praesentium amet quos soluta
            ratione eligendi voluptatem aut ab. Doloremque, rerum.
          </p>
        </div>
      </Link>
      <Link href="/news/testId" className="flex flex-row m-5">
        <Image src="/defi.jpeg" width={200} height={200} alt="News Photo"></Image>
        <div className="flex flex-col ml-4 max-w-2xl">
          <h1 className="font-bold">This new post</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, voluptatibus,
            vero reiciendis excepturi tempore esse libero hic in nulla praesentium amet quos soluta
            ratione eligendi voluptatem aut ab. Doloremque, rerum.
          </p>
        </div>
      </Link>
      <Link href="/news/testId" className="flex flex-row m-5">
        <Image src="/defi.jpeg" width={200} height={200} alt="News Photo"></Image>
        <div className="flex flex-col ml-4 max-w-2xl">
          <h1 className="font-bold">This new post</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, voluptatibus,
            vero reiciendis excepturi tempore esse libero hic in nulla praesentium amet quos soluta
            ratione eligendi voluptatem aut ab. Doloremque, rerum.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default News;
