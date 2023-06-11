import Image from 'next/image';

export default function Home() {
  return (
    <div className="px-20 flex flex-row relative">
      <div className="flex pt-10 flex-col mr-40">
        <Image className="ml-40" src="/solana.png" width={200} height={200} alt="Solana"></Image>
        <Image className=" ml-32 " src="/usdc.png" width={200} height={200} alt="USDC"></Image>
        <Image className="ml-20 " src="/sui.png" width={200} height={200} alt="SUI"></Image>
        <div className="absolute w-44 h-44 bg-black rounded-full blur-2xl top-56 drop-shadow-3xl left-52 -z-10"></div>
      </div>
      <div className="flex flex-col pt-20 items-start">
        <h1 className="text-4xl font-bold ">
          AWEN -{' '}
          <span className=" text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">
            $AWN
          </span>
        </h1>
      </div>
    </div>
  );
}
