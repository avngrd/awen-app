'use client';

import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';
import Lottie from 'lottie-react';
import animationData from '../../../public/robotanim.json';

const Portfolio = () => {
  return (
    <div className="">
      <h1 className="text-center font-bold text-3xl">Check out project`s gallery </h1>
      <div className={styles.items}>
        <Link href="portfolio/defi" className={styles.item}>
          <span className={styles.categoryname}>DeFi</span>
        </Link>
        <Link href="portfolio/designs" className={styles.item}>
          <span className={styles.categoryname}>Designs</span>
        </Link>
        <Link href="portfolio/code" className={styles.item}>
          <span className={styles.categoryname}>Code</span>
        </Link>
      </div>
      <div className={styles.animatebox}>
        <Lottie animationData={animationData}></Lottie>
      </div>
    </div>
  );
};

export default Portfolio;
