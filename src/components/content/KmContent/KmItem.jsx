import React from "react";
import UserInfo from "./UserInfo";
import SableuseInfo from "./SableuseInfo";
import Moment from "react-moment";
const KmItem = ({ kminfo: { kmName, article, Date, users, sableuse } }) => {
  return (
    <div className="card mt-3 mb-2">
      <div className="card-header d-flex justify-content-between">
        <div className="">
          <span>{kmName}</span>{" "}
          <span>
            <Moment format="YYYY/MM/DD">{Date}</Moment>
          </span>{" "}
        </div>
        <div className="">{article}</div>
      </div>
      <div className="card-body">
        <UserInfo users={users} />
      </div>
      <div className="card-footer">Sableuse info</div>
      <div className="card-body">
        <SableuseInfo sableuse={sableuse} />
      </div>
    </div>
  );
};

export default KmItem;
