import React, { memo } from 'react';
import Image from 'next/image';
import { formatPrice } from '@/utils';
import Skeleton from '@/components/crypto/Skeleton';
import styles from '@/components/crypto/page.module.css';
import { motion } from 'framer-motion';

interface Props {
  crypto: {
    id: string;
    name: string;
    symbol: string;
    iconCode: number;
    price: number;
    highPrice: number;
    lowPrice: number;
    prevPrice: number;
    explorer: string;
  };
}

const Crypto = ({ crypto }: Props) => {
  const colorClassName = crypto.prevPrice
    ? crypto.price > crypto.prevPrice
      ? 'text-green-900'
      : 'text-red-900'
    : 'text-white-900';
  const colorBgClassName = crypto.prevPrice
    ? crypto.price > crypto.prevPrice
      ? 'bg-green-400'
      : 'bg-red-400'
    : 'bg-white-600';
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`m-5  p-6 bg-slate-900 shadow-3xl rounded-xl ${styles.card}`}>
      <div className="flex flex-row mb-4">
        <Image
          height={40}
          width={50}
          src={`https://s2.coinmarketcap.com/static/img/coins/128x128/${crypto.iconCode}.png`}
          alt="Coin icon"></Image>
        <h1 className="text-xl font-bold mt-3 ml-2">{crypto.name}</h1>
      </div>
      {crypto.price ? (
        <>
          <span
            className={`${colorClassName} ${colorBgClassName} font-semibold text-xl mb-3 p-1 rounded-md`}
            title={`${crypto.price}`}>
            {formatPrice(crypto.price)}
          </span>
          <div className="bg-slate-800 p-2 rounded-lg mt-3">
            <div className="flex  justify-between items-center">
              <div>24h High</div>
              <div>{formatPrice(crypto.highPrice)}</div>
            </div>
            <div className="flex  justify-between items-center">
              <div>24h Low</div>
              <div>{formatPrice(crypto.lowPrice)}</div>
            </div>
            <div className="flex  justify-between items-center">
              <div>Market</div>
              <div>{crypto.symbol}</div>
            </div>
          </div>
        </>
      ) : (
        <Skeleton></Skeleton>
      )}
    </motion.div>
  );
};

export default memo(Crypto);
