
import SelectMenu from "./components/Select-Menu";
import Grid from "./components/Grid";
import List from "./components/List";
export default function App() {
  return (
    <>
      <div className="body w-50">
        <div className="header flex justify-center">Crypto Wallet</div>
        <SelectMenu />
        <div className="flex justify-center">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded my-7">
            Generate Mnemonic
          </button>
        </div>
        <Grid />
        <div className="flex justify-center">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded my-7">
            Generate Public Key
          </button>
        </div>
        <List />
      </div>
    </>
  );
}
