'use client';
import Link from 'next/link';
import Ticker from '@/components/ticker/Ticker';

const About = async () => {
  return (
    <div className="px-20 mt-14 flex flex-row justify-between">
      <div className=" max-w-xl">
        <h1 className=" text-3xl font-bold max-w-xl  ">
          Tracking cryptocurrency rates is vital for anyone who invests, trades, or uses
          cryptocurrencies.
        </h1>
        <ul className="">
          <li className="my-4">
            <p>
              Informed Investment Decisions: Cryptocurrency prices can fluctuate wildly. Monitoring
              these changes allows investors to make informed decisions about their investment risk.
              Understanding price trends can also help investors decide whether to buy, sell, or
              hold their assets.
            </p>
          </li>
          <li className="my-4">
            <p>
              Profit Maximization: For cryptocurrency traders, especially day traders, real-time
              rate monitoring is crucial. They use this data to determine the optimal time to enter
              or exit a position to maximize profits.
            </p>
          </li>
          <li className="my-4">
            <p>
              Risk Management: Tracking cryptocurrency rates can also aid in risk management. This
              might involve setting stop losses based on historical price data or defining hedging
              strategies.
            </p>
          </li>
          <li className="my-4">
            <p>
              Budgeting & Planning: If you use cryptocurrency for personal or business transactions,
              tracking rates can help you plan expenses and manage your budget. Understanding price
              fluctuations can help you pick the best time for transactions or transfers.
            </p>
          </li>
        </ul>
        <h1 className="text-3xl font-bold max-w-xl mt-20">
          Popular platforms to check out Cryptocurrencies:
        </h1>
        <ul className="mt-10">
          <li className="text-xl font-bold mb-5">
            1. TradingView -{' '}
            <Link
              className="text-blue-700 text-base font-normal"
              href="https://ru.tradingview.com/"
              target="_blank">
              Check
            </Link>
          </li>
          <li className="text-xl font-bold mb-5">
            2. CoinMarketCap -{' '}
            <Link
              className="text-blue-700 text-base font-normal"
              href="https://coinmarketcap.com/"
              target="_blank">
              Check
            </Link>
          </li>
          <li className="text-xl font-bold mb-5">
            3. ByBit -{' '}
            <Link
              className="text-blue-700 text-base font-normal"
              href="https://www.bybit.com/"
              target="_blank">
              Check
            </Link>
          </li>
          <li className="text-xl font-bold mb-5">
            4. Binance -{' '}
            <Link
              className="text-blue-700 text-base font-normal"
              href="https://www.binance.com/"
              target="_blank">
              Check
            </Link>
          </li>
        </ul>
      </div>
      <Ticker></Ticker>
    </div>
  );
};

export default About;
