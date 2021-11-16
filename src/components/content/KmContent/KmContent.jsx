import React from "react";
import KmItem from "./KmItem";

const KmContent = ({ kmsInfo }) => {
  return (
    <div className="mt-2 mb-2 border border-primary">
      <div class="row">
        {kmsInfo.map((kminfo) => (
          <div class="ms-2 col-md border border-dark" key={kminfo.id}>
            <KmItem kminfo={kminfo} />
          </div>
        ))}
        {/* </div>
        <div class="ms-2 col-md ">Column</div>
        <div class="ms-2 col-md ">Column</div> */}
      </div>
    </div>
  );
};

export default KmContent;
