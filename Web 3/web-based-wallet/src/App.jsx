import { Buffer } from "buffer";
import SelectMenu from "./components/Select-Menu";
import Grid from "./components/Grid";
import List from "./components/List";
import { useState } from "react";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
// import { generateMnemonic } from "bip39";
import { derivePath } from "ed25519-hd-key";

window.Buffer = Buffer;

export default function App() {
  const [selectedBlockChain, setSelectedBlockchain] = useState(null);
  const [mnemonicArray, setMnemonicArray] = useState([]);
  const [mnemonic, setMnemonic] = useState();
  const [iteratorSOL, setIteratorSOL] = useState(0);
  const [iteratorETH, setIteratorETH] = useState(0);
  const [solPubKeys, setSolPubKeys] = useState([]);
  const [ethPubKeys, setEthPubKeys] = useState([]);
  // let solanaI=0;
  const handleSelectChange = (id) => {
    setSelectedBlockchain(id);
    console.log(selectedBlockChain);

  };

  function  handleBlockChainBasedGen(){
        const seed = mnemonicToSeedSync(mnemonic);
        // if (selectedBlockChain === 501) {
        //   // const pathSOL = `m/44'/${selectedBlockChain}'/${iteratorSOL}'/0'`;
        //   const pathSOL = `m/44'/501'/0'/0'`;
        //   console.log(pathSOL);
        //   setIteratorSOL(iteratorSOL + 1);
        //   const derivedSeed = derivePath(pathSOL, seed.toString("hex")).key;
        //   const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        //   const publicKeySol = Keypair.fromSecretKey(secret).publicKey.toBase58();
        //   setSolPubKeys((prev) => [...prev, publicKeySol]);
        //   console.log(solPubKeys)
        // } else {
        //   const pathETH = `m/44'/${selectedBlockChain}'/${iteratorETH}'/0'`;
        //   setIteratorETH(iteratorETH + 1);
        //   const derivedSeed = derivePath(pathETH, seed.toString("hex")).key;
        //   const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        //   const publicKeyEth = Keypair.fromSecretKey(secret).publicKey.toBase58();
        //   setEthPubKeys((prev) => [...prev, publicKeyEth]);
          // console.log(ethPubKeys)
        // }
            const path = `m/44'/501'/0'/0'`;
            console.log(path);
            console.log(seed);
            console.log(derivedSeed);
            const derivedSeed = derivePath(path, seed.toString("hex")).key;
            // const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
            // console.log('Public key;' + Keypair.fromSecretKey(secret).publicKey.toBase58());
  }
  const setGeneratedMnemonic = () => {
    console.log('Entered function')
    const mnemonicWords = generateMnemonic();
    console.log(mnemonicWords);
    setMnemonic(mnemonicWords);

    const wordsArray = mnemonicWords.split(" ");
    setMnemonicArray(wordsArray);
  };
  const getPublicKey = () =>{
    const seed = mnemonicToSeedSync(mnemonic);
    // if (selectedBlockChain === 501) {
    //   // const pathSOL = `m/44'/${selectedBlockChain}'/${iteratorSOL}'/0'`;
    //   const pathSOL = `m/44'/501'/0'/0'`;
    //   console.log(pathSOL);
    //   setIteratorSOL(iteratorSOL + 1);
    //   const derivedSeed = derivePath(pathSOL, seed.toString("hex")).key;
    //   const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    //   const publicKeySol = Keypair.fromSecretKey(secret).publicKey.toBase58();
    //   setSolPubKeys((prev) => [...prev, publicKeySol]);
    //   console.log(solPubKeys)
    // } else {
    //   const pathETH = `m/44'/${selectedBlockChain}'/${iteratorETH}'/0'`;
    //   setIteratorETH(iteratorETH + 1);
    //   const derivedSeed = derivePath(pathETH, seed.toString("hex")).key;
    //   const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    //   const publicKeyEth = Keypair.fromSecretKey(secret).publicKey.toBase58();
    //   setEthPubKeys((prev) => [...prev, publicKeyEth]);
    // console.log(ethPubKeys)
    // }

    //----------------------
            const path = `m/44'/501'/0'/0'`;
            const derivedSeed = derivePath(path, seed.toString("hex")).key;
            console.log(derivedSeed);
    //--------------------
  };
  return (
    <>
      <div className="body w-50">
        <div className="header flex justify-center">Crypto Wallet</div>
        <SelectMenu onSelectChange={handleSelectChange} />
        <div className="flex justify-center">
          <button
            onClick={setGeneratedMnemonic}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded my-7"
          >
            Generate Mnemonic
          </button>
        </div>
        <Grid mnemonicArray={mnemonicArray} />
        <div className="flex justify-center">
          <button onClick={getPublicKey} className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded my-7">
            Generate Public Key
          </button>
        </div>
        <div className="flex justify-evenly">
        <List publicKeys={solPubKeys}/>
        <List publicKeys={ethPubKeys}/>
        </div>
      </div>
    </>
  );
}
