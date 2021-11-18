import {
  GET_KMS,
  ADD_KM,
  SET_CURRENT_KM,
  CLEAR_CURRENT_KM,
  UPDATE_KM,
} from "./types";

import KmReducer from "./kmReducer";
import kmContext from "./kmContext";
import { useReducer } from "react";
const StateKm = ({ children }) => {
  const initialState = {
    kmsInfo: [
      {
        id: 1,
        kmName: "1",
        article: "53701/53700",
        Date: Date.now(),
        users: [
          {
            id: 1,
            nameUser: "nader",
            formée: true,
            role: "machine",
          },
          {
            id: 2,
            nameUser: "rania",
            formée: true,
            role: "215",
          },
          {
            id: 3,
            nameUser: "safwen",
            formée: false,
            role: "215",
          },

          {
            id: 4,
            nameUser: "sirine",
            formée: false,
            role: "215",
          },
        ],
        sableuse: [
          {
            id: 1,
            nameArticle: "700/701",
            nameUser: [
              {
                nameUser: "refka",
                formée: true,
              },
              {
                nameUser: "na3ima",
                formée: true,
              },
              {
                nameUser: "sofien",
                formée: true,
              },
            ],
          },
        ],
      },
    ],
    loading: true,
    currentKm: null,
  };
  const [state, dispatch] = useReducer(KmReducer, initialState);

  //add kms
  const AddKms = (KMForm) => {
    dispatch({ type: ADD_KM, payload: KMForm });
    console.log("add km from state", KMForm);
  };

  // //getKms
  // const getAllKms = () => {
  //   dispatch({ type: GET_KMS });
  // };

  //setcurrentKM to edite
  const setCurrentKm = (kminfo) => {
    dispatch({ type: SET_CURRENT_KM, payload: kminfo });
  };
  //clear current km
  const clearCurrentKm = () => {
    dispatch({ type: CLEAR_CURRENT_KM });
  };

  //updatekms
  const updateKmInfo = (kmForm) => {
    dispatch({ type: UPDATE_KM, payload: kmForm });
  };

  //delKms

  return (
    <kmContext.Provider
      value={{
        kmsInfo: state.kmsInfo,
        loading: state.loading,
        currentKm: state.currentKm,
        AddKms,
        // getAllKms,
        setCurrentKm,
        clearCurrentKm,
        updateKmInfo,
      }}
    >
      {children}
    </kmContext.Provider>
  );
};

export default StateKm;
