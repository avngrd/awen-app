'use client';

import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import AuthProvider from '@/components/AuthProvider/AuthProvider';
import { ThirdwebProvider } from '@thirdweb-dev/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Awen',
  description: 'Awen DApp',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider activeChain="goerli">
          <ThemeProvider>
            <AuthProvider>
              <Navbar />
              {children}
              <Footer />
            </AuthProvider>
          </ThemeProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
