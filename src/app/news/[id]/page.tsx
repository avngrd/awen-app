import React from 'react';
import styles from '@/app/news/[id]/page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className="px-20">
      <div className={styles.top}>
        <div className={styles.left}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.image}
              width={30}
              height={30}
              alt="Avatar"
              className=" rounded-2xl"></Image>
            <p>{data.username}</p>
          </div>
        </div>
        <div className={styles.right}>
          <Image src={data.image} width={300} height={300} alt="Avatar"></Image>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
