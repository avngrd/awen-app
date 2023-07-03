'use client';

import React from 'react';
import styles from '@/app/contact/page.module.css';
import Lottie from 'lottie-react';
import animationData from '../../../public/anim2.json';

export const metadata = {
  title: 'Awen Contact Form',
  description: 'This is Contact Page',
};

const Contact = () => {
  return (
    <div className="px-20 flex justify-between mt-24 mb-24">
      <div className={styles.animatewindow}>
        <Lottie animationData={animationData}></Lottie>
      </div>
      <div className="flex flex-col mx-auto">
        <h1 className={styles.title}>Присоединяйтесь в сообщество разработчиков AWEN!</h1>
        <p className="text-xl font-medium">Требуются разработчики:</p>
        <ul className="flex flex-col">
          <li className={styles.developer}>Solidity</li>
          <li className={styles.developer}>Solana</li>
          <li className={styles.developer}>Backend</li>
          <li className={styles.developer}>Data analyst</li>
        </ul>
        <p className={styles.mailwrap}>
          По поводу вакансий обращаться:{' '}
          <span className={styles.mail}>awenmgmt@awencompany.com</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
