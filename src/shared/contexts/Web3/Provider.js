import { JsonRpcSigner } from "@ethersproject/providers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";
import React, { useCallback, useEffect, useState } from "react";
import Web3Modal from "web3modal";
import Context from "./Context";

const Provider = ({ children }) => {
  const [web3Modal, setWeb3Modal] = useState(undefined);
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);

  const handleConnect = useCallback(async () => {
    web3Modal?.clearCachedProvider();
    const provider = await web3Modal?.connect();
    const newWeb3 = new ethers.providers.Web3Provider(provider);
    const accounts = await newWeb3.listAccounts();
    setConnected(true);
    setWalletAddress(accounts[0]);
    setWallet(newWeb3.getSigner());
    provider.on("accountsChanged", (newAccounts) => {
      if (Array.isArray(newAccounts) && newAccounts.length) {
        setWalletAddress(newAccounts[0]);
      }
    });
  }, [setWalletAddress, setWallet, web3Modal, setConnected]);

  const handleDisconnect = useCallback(async () => {
    setConnected(false);
    setWalletAddress(undefined);
    setWallet(undefined);
  }, [setConnected, setWalletAddress, setWallet]);

  useEffect(() => {
    async function initWeb3Modal() {
      try {
        if (!web3Modal) {
          const providerOptions = {
            walletconnect: {
              package: WalletConnectProvider,
              options: {
                //TODO put in conf
                infuraId: "e63a8b99a7c44e6e892d54c203bd98b7",
              },
            },
          };
          const web3Modal = new Web3Modal({
            cacheProvider: true,
            providerOptions,
            theme: "dark",
          });

          setWeb3Modal(web3Modal);
        }
      } catch (e) {
        console.log(e);
      }
    }
    initWeb3Modal();
  }, [setWeb3Modal, web3Modal]);

  return (
    <Context.Provider
      value={{
        handleConnect,
        handleDisconnect,
        connected,
        walletAddress,
        wallet,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
