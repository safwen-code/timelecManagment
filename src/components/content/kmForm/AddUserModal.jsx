import React, { useState } from "react";

const AddUserModal = ({ usersInMachine }) => {
  console.log("uesrInMACHINE", usersInMachine);

  const [Forma, setForma] = useState({
    nameUser: "",
    role: "",
    formée: "",
  });

  const { nameUser, role, formée } = Forma;
  const hundelChange = (e) => {
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);
    setForma({ ...Forma, [name]: value });
  };
  const SaveUsers = () => {
      const test = usersInMachine.push(Forma)
    console.log("form", test);
  };
  return (
    <>
      <div className="col mt-2 mb-2">
        {" "}
        <input
          type="text"
          class="form-control"
          placeholder="nameUser"
          aria-label="First name"
          name="nameUser"
          value={nameUser}
          onChange={hundelChange}
        />
      </div>
      <div className="col mt-2 mb-2">
        {" "}
        <input
          type="text"
          class="form-control"
          placeholder="role"
          aria-label="First name"
          name="role"
          value={role}
          onChange={hundelChange}
        />
      </div>
      <div className="col mt-2 mb-2">
        {" "}
        <input
          type="text"
          class="form-control"
          placeholder="formée"
          aria-label="First name"
          name="formée"
          value={formée}
          onChange={hundelChange}
        />
      </div>
      <button className=" col-4 m-auto btn btn-primary" onClick={SaveUsers}>
        save Users
      </button>
    </>
  );
};

export default AddUserModal;
