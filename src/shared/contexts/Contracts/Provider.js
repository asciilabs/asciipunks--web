import abis from "@abis";
import addresses from "../../addresses.js";
import useWeb3 from "@hooks/useWeb3";
import { Contract } from "ethers";
import React, { useCallback, useEffect, useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  // const { setLoadingMessage } = useLoading();
  const [nfts, setNfts] = useState([]);
  const [punks, setPunks] = useState(
    new Contract(addresses.token, abis.punks)
  );
  const { wallet, walletAddress } = useWeb3();

  useEffect(() => {
    if (!!wallet && !punks.signer) {
      setPunks(punks.connect(wallet));
    }
  }, [wallet, setPunks, punks]);

  // const createPunk = useCallback(async () => {
  //   if (!walletAddress || !punks.signer ) { return };
  // }, [punks, walletAddress]);

  const punksForUser = useCallback(async () => {
    if (!walletAddress || !punks.signer) return [];
    const userPunks = [];
    const balance = await masks.balanceOf(walletAddress).toNumber()
    for (let index = 0; index < balance; index++) {
      userPunks.push(
        await punks.tokenOfOwnerByIndex(walletAddress, index).toString()
      );
    }
    return userPunks;
  }, [punks, walletAddress]);

  useEffect(() => {
    async function fetchTokens() {
      setNfts(await masksForUser());
    }
    fetchTokens();
  }, [
    setNfts,
    punksForUser,
    version,
  ]);

  return (
    <Context.Provider
      value={{
        nfts,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
