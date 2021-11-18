import React, { Fragment } from "react";

const SableuseInfo = ({ sableuse }) => {
  // console.log(sableuse);
  return (
    <>
      {/* {sableuse.map((sabl) => {
        return (
          <Fragment key={sabl.id}>
            <div className=" col border border-dark d-flex justify-content-center">
              {sabl.articleName}
            </div>
            {sabl.usersName.map((user) => {
              return (
                <div className="row g-2 ms-2 mt-2 mb-3" key={user.id}>
                  <div className="col-6 ">{user.nameUser}</div>
                </div>
              );
            })}
          </Fragment>
        );
      })} */}
      hello from sableuse
    </>
  );
};

export default SableuseInfo;
