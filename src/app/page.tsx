'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="px-20 flex flex-row relative mb-28">
      <div className="flex pt-10 flex-col mr-40">
        <Image
          className="ml-40 z-20"
          src="/solana.png"
          width={200}
          height={200}
          alt="Solana"></Image>
        <Image className=" ml-32 z-20" src="/usdc.png" width={200} height={200} alt="USDC"></Image>
        <Image className="ml-20 z-20" src="/sui.png" width={200} height={200} alt="SUI"></Image>
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
          Добро пожаловать в мир нашего инновационного криптопроекта, который создает свой
          собственный токен! Мы рады представить наш последний разработки, которые сделают
          криптовалюты доступными и удобными для всех. Наша команда талантливых разработчиков
          исследовала и проанализировала передовые технологии блокчейна, чтобы создать токен,
          который отражает наши ценности и стремления. Мы уверены, что наш токен представляет собой
          идеальное сочетание безопасности, эффективности и удобства использования.
        </p>
        <button className="mt-10 font-medium flex items-center flex-row px-7 py-3 text-green-100 rounded-xl bg-gradient-to-r from-orange-800 via-yellow-600 via-yellow-500 to-orange-500 duration-300 ease-linear hover:opacity-90">
          {' '}
          <Image className=" mr-3" src="/mm.svg" width={40} height={40} alt="MetaMask"></Image>{' '}
          Connect with MetaMask
        </button>
        <Image
          className="absolute animate-pulse
           right-80 bottom-32 z-10 blur-3xl "
          src="/shadow.png"
          width={200}
          height={200}
          alt="Shadow"></Image>
        <Image
          className="absolute animate-pulse
           left-80 top-32 z-10 blur-xl "
          src="/shadow.png"
          width={200}
          height={200}
          alt="Shadow"></Image>
        <Image
          className="absolute animate-pulse
           left-80  top-3/4 z-10 blur-2xl "
          src="/shadow.png"
          width={100}
          height={100}
          alt="Shadow"></Image>
      </div>
    </div>
  );
}
