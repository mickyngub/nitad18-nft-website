import React, { useState } from "react";
import { ethers } from "ethers";
import Button from "src/ui/Button";
import styled from "styled-components";
import CanvasUniverse from "../CanvasUniverse";
import { TitleH1, TitleH2, TitleH4 } from "src/ui/Typography";
const Mint = () => {
  const [address, setAddress] = useState<string>("");
  const handleConnectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    let signerAddress = await signer.getAddress();
    setAddress(signerAddress);
  };
  return (
    <WrapperMint id="mint">
      <TitleH1 fontFamily="AloneInSpace">Polygon Network</TitleH1>

      <TitleH2 fontFamily="AloneInSpace">Contract Address</TitleH2>
      <TitleH4 fontFamily="AloneInSpace">
        0x45772883a4e669b6f9ee3fdbe29f282a1db8fb80
      </TitleH4>
      <MintingDiv>
        <WrapperCanvas>
          <CanvasUniverse />
        </WrapperCanvas>
        {!address ? (
          <Button onClick={handleConnectWallet}>Connect Wallet</Button>
        ) : (
          <Button>Mint</Button>
        )}
      </MintingDiv>
    </WrapperMint>
  );
};
const WrapperMint = styled.div`
  height: 100vh;
  margin-bottom: 15rem;
  padding: 6rem 4rem;
`;
const WrapperCanvas = styled.div`
  /* height: 60%; */
  width: 27.5%;
  position: relative;
`;
const MintingDiv = styled.div`
  /* width: 40%; */
  /* height: 80%; */

  display: flex;
  flex-direction: column;
  align-items: end;
  /* justify-content: end; */
  /* place-content: center; */
`;
export default Mint;
