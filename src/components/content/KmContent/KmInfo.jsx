import React, { useContext } from "react";
import KmContent from "./KmContent";
import KmHeader from "./KmHeader";

import KmContext from "../../../context/kmContext";

const KmInfo = () => {
  const kmContext = useContext(KmContext);
  const { kmsInfo } = kmContext;
  console.log("kmsinfo", kmsInfo);

  return (
    <div className="">
      <KmHeader />
      <KmContent kmsInfo={kmsInfo} />
    </div>
  );
};

export default KmInfo;
