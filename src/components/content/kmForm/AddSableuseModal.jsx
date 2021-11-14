import React, { useState } from "react";

const AddSableuseModal = ({ userInSableuse, setKMForm, KMForm }) => {
  console.log("userSableuse", userInSableuse);
  // // console.log("setkmForm", setKMForm);
  // console.log("kmform", KMForm);

  const [Forma, setForma] = useState({
    nameArticle: "",
    quantity: "",
    nameUser: "",
    formée: "",
  });

  const { nameArticle, quantity, formée, nameUser } = Forma;

  
  const onhundelChange = (e) => {
    const { value, name } = e.target;
    setForma({ ...Forma, [name]: value });
  };

  const saveSableuse = () => {
    console.log("sableuse info", Forma);
  };
  return (
    <div className="row border border-dark">
      <div class="col mt-2 mb-1">
        <input
          type="text"
          class="form-control"
          placeholder="Name Article"
          aria-label="First name"
          name="nameArticle"
          value={nameArticle}
          onChange={onhundelChange}
        />
      </div>
      <div class="col mt-2 mb-1">
        <input
          type="number"
          class="form-control"
          placeholder="quantity"
          aria-label="Last name"
          name="quantity"
          value={quantity}
          onChange={onhundelChange}
        />
      </div>

      <div className="row border border-secondary mt-3 mb-2">
        <h6>add User</h6>
        <div className="col mt-2 mb-2">
          {" "}
          <input
            type="text"
            class="form-control"
            placeholder="nameUser"
            aria-label="First name"
            name="nameUser"
            value={nameUser}
            onChange={onhundelChange}
          />
        </div>
        <div className="col mt-2 mb-2">
          {" "}
          <input
            type="text"
            class="form-control"
            placeholder="role"
            aria-label="First name"
            name="formée"
            value={formée}
            onChange={onhundelChange}
          />
        </div>

        <button
          className=" col-4 m-auto btn btn-primary"
          onClick={saveSableuse}
        >
          save sableuse
        </button>
      </div>
    </div>
  );
};

export default AddSableuseModal;
