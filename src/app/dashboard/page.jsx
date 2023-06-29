'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import styles from '@/app/dashboard/page.module.css';
import Image from 'next/image';

const Dashboard = () => {
  const session = useSession();

  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher,
  );

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === 'authenticated') {
    return (
      <div className="px-20 flex justify-between">
        <div className={styles.posts}>
          {isLoading
            ? 'Loading..'
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <Image src={post.image} alt="Post Image"></Image>
                  <div className={styles.postleft}>
                    <h1 className={styles.posttitle}>{post.title}</h1>
                    <span className={styles.delete}>X</span>
                  </div>
                </div>
              ))}
        </div>
        <form className={styles.newpost} onSubmit={handleSubmit}>
          <h1 className={styles.addtitle}>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.forminput}></input>
          <input type="text" placeholder="Description" className={styles.forminput}></input>
          <input type="text" placeholder="Image" className={styles.forminput}></input>
          <textarea
            className={styles.contentarea}
            placeholder="Content"
            cols="30"
            rows="10"></textarea>
          <button className={styles.sendButton}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
