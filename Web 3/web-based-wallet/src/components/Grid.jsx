import PropTypes from "prop-types";

export default function Grid({ mnemonicArray }) {
  console.log(mnemonicArray)
  return (
    <>
      <div className="flex justify-center my-5  ">
        <div className="gridGrp w-24">
          <div className="p-3 bg-red-500">
            <span>1.{mnemonicArray[0]}</span>
          </div>
          <div className="p-3 bg-red-500">
            <span>4.{mnemonicArray[3]}</span>
          </div>
          <div className="p-3 bg-red-500">
            <span>7.{mnemonicArray[6]}</span>
          </div>
        </div>
        <div className="gridGrp w-24">
          <div className="p-3 bg-red-500">
            <span>2.{mnemonicArray[1]}</span>
          </div>
          <div className="p-3 bg-red-500">
            <span>5.{mnemonicArray[4]}</span>
          </div>
          <div className="p-3 bg-red-500">
            <span>8.{mnemonicArray[7]}</span>
          </div>
        </div>
        <div className="gridGrp w-24">
          <div className="p-3 bg-red-500">
            <span>3.{mnemonicArray[2]}</span>
          </div>
          <div className="p-3 bg-red-500">
            <span>6.{mnemonicArray[5]}</span>
          </div>
          <div className="p-3 bg-red-500">
            <span>9.{mnemonicArray[8]}</span>
          </div>
        </div>
      </div>
    </>
  );
}
Grid.propTypes = {
  mnemonicArray: PropTypes.func.isRequired,
};
