import PropTypes from "prop-types";

export default function Grid({ mnemonicArray }) {
  return (
    <>
      <div className="flex justify-center my-5  ">
        <div className="flex justify-center bg-indigo-300 rounded-md">
          <div className="gridGrp w-24 mr-5">
            <div className="p-6">
              <span className="mr-2">1.</span>
              <span>{mnemonicArray[0]}</span>
            </div>
            <div className="p-6">
              <span className="mr-2">4.</span>
              <span>{mnemonicArray[3]}</span>
            </div>
            <div className="p-6">
              <span className="mr-2">7.</span>
              <span>{mnemonicArray[6]}</span>
            </div>
          </div>
          <div className="gridGrp w-24 mr-7">
            <div className="p-6">
              <span className="mr-2">2.</span>
              <span>{mnemonicArray[1]}</span>
            </div>
            <div className="p-6">
              <span className="mr-2">5.</span>
              <span>{mnemonicArray[4]}</span>
            </div>
            <div className="p-6">
              <span className="mr-2">8.</span>
              <span>{mnemonicArray[7]}</span>
            </div>
          </div>
          <div className="gridGrp w-24 mr-7">
            <div className="p-6">
              <span className="mr-2">3.</span>
              <span>{mnemonicArray[2]}</span>
            </div>
            <div className="p-6">
              <span className="mr-2">6.</span>
              <span>{mnemonicArray[5]}</span>
            </div>
            <div className="p-6">
              <span className="mr-2">9.</span>
              <span>{mnemonicArray[8]}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Grid.propTypes = {
  mnemonicArray: PropTypes.func.isRequired,
};
