import React, { useState } from "react";
import AddUserModal from "./AddUserModal";
import AddSableuseModal from "./AddSableuseModal";
const AddKm = () => {
  const [KMForm, setKMForm] = useState({
    nameArticle: "",
    date: new Date(),
    usersInMachine: [
      // {
      //   nameUser: "",
      //   role: "",
      //   formée: "",
      // },
    ],
    userInSableuse: [
      // {
      //   nameArticle: "",
      //   quantity: "",
      //   nameUser: "",
      //   formée: "",
      // },
    ],
  });

  const { nameArticle, date, usersInMachine } = KMForm;
  const hundelChange = (e) => {
    setKMForm({
      ...KMForm,
      [e.target.name]: e.target.value,
    });
  };

  const addKm = (e) => {
    console.log("addKm");
    console.log(KMForm);
  };
  return (
    <div className="row border border-dark p-3">
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Name Article"
          aria-label="First name"
          name="nameArticle"
          value={nameArticle}
          onChange={hundelChange}
        />
      </div>
      <div class="col">
        <input
          type="Date"
          class="form-control"
          placeholder="Last name"
          aria-label="Last name"
          name="date"
          value={date}
          onChange={hundelChange}
        />
      </div>
      <div className="row border border-primary mt-2 mb-2 ">
        <AddUserModal KMForm={KMForm} setKMForm={setKMForm} />
      </div>
      <div className="row border border-success mb-2">
        <AddSableuseModal setKMForm={setKMForm} KMForm={KMForm} />
      </div>
      <button className=" col-4 m-auto btn btn-primary" onClick={addKm}>
        Add
      </button>
    </div>
  );
};

export default AddKm;
