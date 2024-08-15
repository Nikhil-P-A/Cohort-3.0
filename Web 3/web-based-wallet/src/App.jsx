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
  const [selectedBlockChain, setSelectedBlockchain] = useState(501);
  const [mnemonicArray, setMnemonicArray] = useState([]);
  const [mnemonic, setMnemonic] = useState();
  const [iteratorSOL, setIteratorSOL] = useState(0);
  const [iteratorETH, setIteratorETH] = useState(0);
  const [solPubKeys, setSolPubKeys] = useState([]);
  const [ethPubKeys, setEthPubKeys] = useState([]);
  const handleSelectChange = (id) => {
    setSelectedBlockchain(id);

  };

  function  handleBlockChainBasedGen(){
        const seed = mnemonicToSeedSync(mnemonic);
        if (selectedBlockChain === 501) {
          const pathSOL = `m/44'/60'/${iteratorSOL}'/0'`;
          setIteratorSOL(iteratorSOL + 1);
          const derivedSeed = derivePath(pathSOL, seed.toString("hex")).key;
          const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
          const publicKeySol = Keypair.fromSecretKey(secret).publicKey.toBase58();
          setSolPubKeys((prev) => [...prev, publicKeySol]);
        } else {
          const pathETH = `m/44'/60'/${iteratorETH}'/0'`;
          setIteratorETH(iteratorETH + 1);
          const derivedSeed = derivePath(pathETH, seed.toString("hex")).key;
          const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
          const publicKeyEth = Keypair.fromSecretKey(secret).publicKey.toBase58();
          setEthPubKeys((prev) => [...prev, publicKeyEth]);
        }
  }
  const setGeneratedMnemonic = () => {
    const mnemonicWords = generateMnemonic();
    setMnemonic(mnemonicWords);

    const wordsArray = mnemonicWords.split(" ");
    setMnemonicArray(wordsArray);
  };
  const getPublicKey = () =>{
    handleBlockChainBasedGen();
  };
  const clear = () => {
       setMnemonicArray([]);
       setMnemonic();
       setIteratorSOL(0);
       setIteratorETH(0);
       setSolPubKeys([]);
       setEthPubKeys([]);
  }
  return (
    <>
      <div className="body w-50">
        <div className="header flex justify-center text-4xl font-medium mb-7 mt-5 text-indigo-600">
          EtherSol
        </div>
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
          <button
            onClick={getPublicKey}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mb-20 mt-20"
          >
            Generate Public Key
          </button>
        </div>
        <div className="flex justify-evenly">
          <div>
            <span className="text-indigo-500 text-2xl">Solana</span>
            <List publicKeys={solPubKeys} />
          </div>
          <div>
            <span className="text-indigo-500 text-2xl">Ethereum</span>
            <List publicKeys={ethPubKeys} />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={clear}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mb-20 mt-20"
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
}
