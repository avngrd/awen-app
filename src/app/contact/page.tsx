'use client';

import React from 'react';
import styles from '@/app/contact/page.module.css';
import Lottie from 'lottie-react';
import animationData from '../../../public/anim2.json';

// export const metadata = {
//   title: 'Awen Contact Form',
//   description: 'This is Contact Page',
// };

const Contact = () => {
  return (
    <div className="px-20 flex justify-between mt-24 mb-24">
      <div className={styles.animatewindow}>
        <Lottie animationData={animationData}></Lottie>
      </div>
      <div className="flex flex-col mx-auto">
        <h1 className={styles.title}>Contact with our developers!</h1>
        <form className={styles.form}>
          <input className={styles.nameinput} type="text" placeholder="Name" />
          <input className={styles.nameinput} type="text" placeholder="Email" />
          <textarea className={styles.messagearea} placeholder="Message"></textarea>
          <button className="mt-5 bg-blue-700 text-white p-3 rounded duration-300 hover:scale-105">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
