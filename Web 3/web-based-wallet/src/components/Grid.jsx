export default function Grid() {
    return (
      <>
      <div className="flex justify-center my-5  ">
      <div className="gridGrp w-24">
        <div className="p-3 bg-red-500">
          <span className="">1.</span>
        </div>
        <div className="p-3 bg-red-500">
          <span className="">4.</span>
        </div>
        <div className="p-3 bg-red-500">
          <span className="">7.</span>
        </div>
      </div>
      <div className="gridGrp w-24">
        <div className="p-3 bg-red-500">
          <span className="">2.</span>
        </div>
        <div className="p-3 bg-red-500">
          <span className="">5.</span>
        </div>
        <div className="p-3 bg-red-500">
          <span className="">8.</span>
        </div>
      </div>
      <div className="gridGrp w-24">
        <div className="p-3 bg-red-500">
          <span className="">3.</span>
        </div>
        <div className="p-3 bg-red-500">
          <span className="">6.</span>
        </div>
        <div className="p-3 bg-red-500">
          <span className="">9.</span>
        </div>
      </div>
      </div>
      </>
    );
}