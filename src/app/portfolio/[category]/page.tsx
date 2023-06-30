import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { items } from './data';
import { notFound } from 'next/navigation';

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div className="flex mt-10 mx-auto flex-col justify-center">
      {data.map((item) => (
        <div
          key={item.id}
          className={`flex m-5 bg-sky-400 px-3 py-2 rounded-xl items-center ${styles.categbox}`}>
          <div className="">
            <h1 className="font-bold text-3xl mb-3">{item.title}</h1>
            <p>{item.description}</p>
          </div>
          <div>
            <Image
              src={item.image}
              className={styles.imagebox}
              width={200}
              height={200}
              alt="defi"></Image>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
