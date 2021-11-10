import React from "react";

const KmHeader = () => {
  return (
    <div className="border border-primary mt-3 mb-3  d-flex justify-content-between">
      <div className="border border-dark mt-2 ms-2 mb-1"> loginuser info</div>
      <div className="border border-danger mt-2 me-2 ms-3 mb-1  ">
        {" "}
        Nbr kmActif
      </div>
    </div>
  );
};

export default KmHeader;
