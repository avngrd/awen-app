'use client';
import React, { useState } from 'react';
import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
  useMetadata,
} from '@thirdweb-dev/react';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { Skeleton } from '@chakra-ui/react';

import Image from 'next/image';

const Trainer = () => {
  const address = useAddress();
  const contractAddress = '0x0bAdc4D4bfCd3C6bf6E966610B70B77fEa1Ae83F';
  const { contract } = useContract(contractAddress);

  const { data: totalAdds, isLoading: loadingTotalAdds } = useContractRead(
    contract,
    'getTotalAdds',
  );

  const { data: allAdds, isLoading: loadingAllAdds } = useContractRead(contract, 'getAdds');
  const [message, setMessage] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
  };

  function clearValues() {
    setMessage('');
    setName('');
    setImageUrl('');
  }

  return (
    <ThirdwebProvider activeChain="goerli">
      <div>
        <div>
          <div>
            <p>EtherAds</p>
          </div>
          <ConnectWallet />
        </div>
        <div>
          <div>
            <div>
              <div>
                <h1>Place your ad here</h1>
                <div>
                  <p>Total Ads on website: </p>
                  <Skeleton isLoaded={!loadingTotalAdds} width={'20px'} ml={'5px'}>
                    {totalAdds?.toString()}
                  </Skeleton>
                </div>
                <p>Name: </p>
                <input
                  placeholder="Svetlana"
                  maxLength={16}
                  value={name}
                  onChange={handleNameChange}></input>
                <input
                  placeholder="Put ad text here..."
                  maxLength={80}
                  value={message}
                  onChange={handleMessageChange}></input>
                <input
                  placeholder="https://imagebobmer/image.png"
                  maxLength={160}
                  value={imageUrl}
                  onChange={handleImageUrlChange}></input>

                <div>
                  {address ? (
                    <Web3Button
                      contractAddress={contractAddress}
                      action={(contract) => {
                        contract.call('placeAdd', [message, name, imageUrl], {
                          value: ethers.utils.parseEther('0.00001'),
                        });
                      }}
                      onSuccess={() => clearValues()}>
                      {'Place ad for 0.00001 ETH'}
                    </Web3Button>
                  ) : (
                    <p>Connect you wallet to interract</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <p>Recent Ads:</p>
                {!loadingAllAdds ? (
                  <div>
                    {allAdds &&
                      allAdds
                        .map((ads: any, index: number) => {
                          return (
                            <div key={index}>
                              <div>
                                <p>{ads[1]}</p>
                                <p>{ads[2]}</p>
                                {/* <Image
                                  src={ads[3]}
                                  width={100}
                                  height={100}
                                  alt="Transaction photo"></Image> */}
                              </div>
                            </div>
                          );
                        })
                        .reverse()}
                  </div>
                ) : (
                  <div>
                    <Skeleton height={'1000px'} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThirdwebProvider>
  );
};

export default Trainer;
