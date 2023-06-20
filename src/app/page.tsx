'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="px-20 flex flex-row relative mb-28">
      <div className="flex pt-10 flex-col mr-40">
        <Image className="ml-40" src="/solana.png" width={200} height={200} alt="Solana"></Image>
        <Image className=" ml-32 " src="/usdc.png" width={200} height={200} alt="USDC"></Image>
        <Image className="ml-20 " src="/sui.png" width={200} height={200} alt="SUI"></Image>
        <div className="absolute w-44 h-44 bg-black rounded-full blur-2xl top-56 drop-shadow-3xl left-52 -z-10"></div>
      </div>
      <div className="flex flex-col pt-20 items-start">
        <h1 className="text-4xl font-bold mb-5">
          AWEN - {''}
          <span className=" text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">
            $AWN
          </span>
        </h1>
        <p className=" max-w-xl">
          Welcome to the world of our innovative crypto project that is creating its own token! We
          are excited to introduce our latest development, which will make cryptocurrencies
          accessible and convenient for everyone. Our team of talented developers has researched and
          analyzed cutting-edge blockchain technologies to create a token that reflects our values
          and aspirations. We are confident that our token represents the perfect combination of
          security, efficiency, and user-friendliness.
        </p>
        <button className="mt-10 font-medium flex items-center flex-row px-7 py-3 text-green-100 rounded-xl bg-gradient-to-r from-orange-800 via-yellow-600 via-yellow-500 to-orange-500 duration-300 ease-linear hover:opacity-90">
          {' '}
          <Image className=" mr-3" src="/mm.svg" width={40} height={40} alt="MetaMask"></Image>{' '}
          Connect with MetaMask
        </button>
        <Image
          className="absolute animate-pulse
           right-80 bottom-32 -z-10 blur-3xl "
          src="/shadow.png"
          width={200}
          height={200}
          alt="Shadow"></Image>
      </div>
    </div>
  );
}
