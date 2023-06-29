'use client';
import React, { useState } from 'react';
import styles from '@/app/dashboard/(auth)/register/page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [err, setErr] = useState(false);

  const router = useRouter();

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const name = evt.target[0].value;
    const email = evt.target[1].value;
    const password = evt.target[2].value;

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 && router.push('/dashboard/login?success=Account has been created');
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="px-20 mt-20">
      <h1 className={styles.title}>Register on AWEN!</h1>
      <form action="" className={styles.formacc} onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" required className={styles.userinput} />
        <input type="email" placeholder="Email" required className={styles.userinput} />
        <input type="password" placeholder="Password" required className={styles.userinput} />
        <button className={styles.buttonreg}>Register</button>
      </form>
      {err && 'Something went wrong!'}
      <Link className={styles.linkc} href="/dashboard/login">
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
