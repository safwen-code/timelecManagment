import React, { Fragment } from "react";

const UserInfo = ({ users }) => {
  // console.log(users);
  const userInMachine = users.find((user) => user.role === "machine");
  // console.log(userInMachine);
  const userMachine = (
    <div className=" col border border-dark d-flex justify-content-center">
      {userInMachine.nameUser} {userInMachine.role} {""}
      <span
        className={`
            "badge"  ${
              userInMachine.formée === "formée" ? " bg-secondary" : "bg-success"
            }  rounded-2 ps-1 pe-1 ms-3`}
      >
        {userInMachine.formée ? <span>formée</span> : <span>non formée</span>}
      </span>
    </div>
  );
  const otherUser = (
    <div className="row g-2 ms-2 mt-2 mb-3">
      {users.map((user) => {
        return (
          user.role === "215" && (
            <div className="col-6 " key={user.id}>
              {user.nameUser}
              <span
                className={`
            "badge"  ${
              user.formée === "formée" ? " bg-secondary" : "bg-success"
            }  rounded-2 ps-1 pe-1 ms-3`}
              >
                {user.formée ? <span>Formée</span> : <span>nom formée</span>}
              </span>
            </div>
          )
        );
      })}
    </div>
  );

  return (
    <>
      {userMachine}
      {otherUser}
    </>
  );
};
export default UserInfo;
