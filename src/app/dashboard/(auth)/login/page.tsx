'use client';
import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import styles from '@/app/dashboard/(auth)/login/page.module.css';
import { useRouter } from 'next/navigation';

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session.status === 'authenticated') {
    router?.push('/dashboard');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn('credentials', { email, password });
  };

  return (
    <div className="px-20">
      <form action="" className={styles.formacc} onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required className={styles.userinput} />
        <input type="password" placeholder="Password" required className={styles.userinput} />
        <button className={styles.buttonreg}>Login</button>
      </form>
      <button className="border p-2 rounded" onClick={() => signIn('google')}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
