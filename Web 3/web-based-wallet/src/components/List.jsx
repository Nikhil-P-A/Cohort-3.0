import propTypes from "prop-types";

export default function List({ publicKeys }) {
  return (
    <div className="flex justify-center w-120">
      <div className="bg-indigo-300 w-110 overflow-y-scroll max-h-48 rounded-md">
        {publicKeys.map((key, index) => {
          return (
            <div
              className="border-t border-indigo-100 p-2  hover:bg-opacity-80" key={index}
            >
              {key}
            </div>
          );
        })}
      </div>
    </div>
  );
}
List.propTypes = {
  publicKeys: propTypes.array.isRequired,
}