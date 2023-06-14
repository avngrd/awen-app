'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const About = () => {
  const CRYPTOCURRENCIES = [
    {
      id: 'BTC',
      name: 'Bitcoin',
      symbol: 'BTCBUSD',
      iconCode: 1,
      price: 0,
      prevPrice: 0,
      highPrice: 0,
      lowPrice: 0,
      explorer: 'https://blockchair.com/bitcoin',
    },
    {
      id: 'ETH',
      name: 'Etherium',
      symbol: 'ETHBUSD',
      iconCode: 1027,
      price: 0,
      prevPrice: 0,
      highPrice: 0,
      lowPrice: 0,
      explorer: 'https://etherscan.io',
    },
    {
      id: 'BNB',
      name: 'BNB',
      symbol: 'BNBBUSD',
      iconCode: 1839,
      price: 0,
      prevPrice: 0,
      highPrice: 0,
      lowPrice: 0,
      explorer: 'https://bscscan.com',
    },
    {
      id: 'XRP',
      name: 'XRP',
      symbol: 'XRPBUSD',
      iconCode: 52,
      price: 0,
      prevPrice: 0,
      highPrice: 0,
      lowPrice: 0,
      explorer: 'https://xrpscan.com',
    },
    {
      id: 'DOGE',
      name: 'Dogecoin',
      symbol: 'DOGEBUSD',
      iconCode: 74,
      price: 0,
      prevPrice: 0,
      highPrice: 0,
      lowPrice: 0,
      explorer: 'https://blockchair.com/dogecoin',
    },
    {
      id: 'MATIC',
      name: 'Polygon',
      symbol: 'MATICBUSD',
      iconCode: 3890,
      price: 0,
      prevPrice: 0,
      highPrice: 0,
      lowPrice: 0,
      explorer: 'https://polygonscan.com',
    },
    {
      id: 'SOL',
      name: 'Solana',
      symbol: 'SOLBUSD',
      iconCode: 5426,
      price: 0,
      prevPrice: 0,
      highPrice: 0,
      lowPrice: 0,
      explorer: 'https://explorer.solana.com',
    },
    {
      id: 'SHIB',
      name: 'Shiba Inu',
      symbol: 'SHIBBUSD',
      iconCode: 5994,
      price: 0,
      prevPrice: 0,
      highPrice: 0,
      lowPrice: 0,
      explorer: 'https://etherscan.io/token/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
    },
    {
      id: 'APE',
      name: 'ApeCoin',
      symbol: 'APEBUSD',
      iconCode: 18876,
      price: 0,
      prevPrice: 0,
      highPrice: 0,
      lowPrice: 0,
      explorer: 'https://etherscan.io/token/0x4d224452801aced8b2f0aebe155379bb5d594381',
    },
    {
      id: 'NEAR',
      name: 'NEAR Protocol',
      symbol: 'NEARBUSD',
      iconCode: 6535,
      price: 0,
      prevPrice: 0,
      highPrice: 0,
      lowPrice: 0,
      explorer: 'https://explorer.near.org',
    },
    {
      id: 'LUNC',
      name: 'Terra Classic',
      symbol: 'LUNCBUSD',
      iconCode: 4172,
      price: 0,
      prevPrice: 0,
      highPrice: 0,
      lowPrice: 0,
      explorer: 'https://finder.terra.money/classic',
    },
    {
      id: 'LUNA',
      name: 'Terra',
      symbol: 'LUNABUSD',
      iconCode: 20314,
      price: 0,
      prevPrice: 0,
      highPrice: 0,
      lowPrice: 0,
      explorer: 'https://finder.terra.money',
    },
  ];
  const [data, setData] = useState(null);

  function formatPrice(price = 0) {
    const formattedPrice = Math.round(Number(price) * 100) / 100;
    return `$${formattedPrice > 0 ? formattedPrice.toLocaleString() : price}`;
  }

  function extractValues(obj = [], prop = '') {
    return obj.map((item) => item[prop]);
  }

  function findByValue(obj = [], value = '', prop = 'symbol') {
    return obj.find((item) => item[prop] === value);
  }

  function getSymbols() {
    return extractValues(CRYPTOCURRENCIES, 'symbol');
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.binance.com/api/v3/ticker/24hr?symbols=${JSON.stringify(getSymbols())}`,
        );
        const newData = await response.json();
        setData(newData);
        console.log(newData);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="px-20">
      <div>
        {data ? (
          <ul>
            {data.map((user) => (
              <li key={user.symbol}>
                {user.symbol}
                <p>{user.lastPrice}</p>
                <Image
                  width={50}
                  height={50}
                  src={`https://s2.coinmarketcap.com/static/img/coins/128x128/1.png`}
                  alt="Coin Icon"></Image>
              </li>
            ))}
          </ul>
        ) : (
          <p>Загрузка данных...</p>
        )}
      </div>
      <Image src="/solana.png" width={200} height={100} alt="Solana"></Image>
    </div>
  );
};

export default About;
