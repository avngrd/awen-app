import React from 'react';

import { useTicker } from '@/utils/hooks';
import Crypto from '../crypto/Crypto';
const Ticker = () => {
  const cryptoCurrencies = useTicker();

  return (
    <div className=" grid grid-cols-3 grid-rows-3">
      {cryptoCurrencies?.map((crypto) => (
        <Crypto key={crypto.id} crypto={crypto} />
      ))}
    </div>
  );
};

export default Ticker;
