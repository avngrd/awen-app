import React from 'react';
import styles from '@/app/news/[id]/page.module.css';
import Image from 'next/image';

const BlogPost = () => {
  return (
    <div className="px-20">
      <div className={styles.top}>
        <div className={styles.left}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloremque!
          </p>
          <div className={styles.author}>
            <Image src="/nft1.jpg" width={30} height={30} alt="Avatar"></Image>
            <p>Name</p>
          </div>
        </div>
        <div className={styles.right}>
          <Image src="/nft1.jpg" width={300} height={300} alt="Avatar"></Image>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ullam ad animi cumque
          molestias suscipit voluptatibus nihil, dolore delectus alias maxime deserunt, illo, eum
          inventore esse dolorum obcaecati enim assumenda.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ullam ad animi cumque
          molestias suscipit voluptatibus nihil, dolore delectus alias maxime deserunt, illo, eum
          inventore esse dolorum obcaecati enim assumenda.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ullam ad animi cumque
          molestias suscipit voluptatibus nihil, dolore delectus alias maxime deserunt, illo, eum
          inventore esse dolorum obcaecati enim assumenda.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
