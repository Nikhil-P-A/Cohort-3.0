import propTypes from "prop-types";

export default function List({ publicKeys }) {

  return (
    <div className="flex justify-center">
      <div>
        {publicKeys.map((key, index) => {
            <div key={index}>{key}</div>
        })}
      </div>
    </div>
  );
}
List.propTypes = {
  publicKeys: propTypes.array.isRequired,
}