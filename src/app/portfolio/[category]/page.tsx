import React from 'react';
import Image from 'next/image';
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
    <div className="flex justify-between mt-10">
      {data.map((item) => (
        <div key={item.id}>
          <div className=" max-w-lg">
            <h1 className="font-bold text-3xl">{item.title}</h1>
            <p>{item.description}</p>
          </div>
          <div>
            <Image src={item.image} width={500} height={500} alt="defi"></Image>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
