import React from "react";
import UserInfo from "./UserInfo";
import SableuseInfo from "./SableuseInfo";
const KmItem = ({ kminfo: { kmName, article, Date, users, sableuse } }) => {
  return (
    <div className="card mt-3 mb-2">
      <div className="card-header d-flex justify-content-between">
        <div className="">
          <span>{kmName}</span> <span>date</span>{" "}
        </div>
        <div className="">{article}</div>
      </div>
      <div className="card-body">
        <UserInfo users={users}/>
      </div>
      <div className="card-footer">Sableuse info</div>
      <div className="card-body">
        <SableuseInfo />
      </div>
    </div>
  );
};

export default KmItem;
