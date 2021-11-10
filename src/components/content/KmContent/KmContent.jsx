import React from "react";
import KmItem from "./KmItem";

const KmContent = () => {
  return (
    <div className="mt-2 mb-2 border border-primary">
      <div class="row">
        <div class="ms-2 col-md border border-dark">
          <KmItem />
        </div>
        <div class="ms-2 col-md ">Column</div>
        <div class="ms-2 col-md ">Column</div>
      </div>
    </div>
  );
};

export default KmContent;
