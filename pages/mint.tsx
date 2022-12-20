import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";














const Mint: NextPage = () => {
  const router = useRouter();

  


  return (
    
    
    
    
    
    
    
    <div className={styles.container}>
      <h1 className={styles.h1}>MINT NFT</h1>
      
         
      
      

      
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      <Web3Button
        colorMode="dark"
        accentColor="#5204BF"
        contractAddress="0xCb1d71829B20480f0c73A4d9316c0a4C573DAB91"
        action={(contract) => contract.erc721.claim(1)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push(`/stake`);
        }}
        onError={(error) => {
          console.error(error);
          alert(error);
        }}
      >
      CLAIM NFT 
      </Web3Button>
    </div>
  );
};

export default Mint;
