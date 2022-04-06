import React from "react";
import AuthStorageContext from "../context/authStorage";

const useAuthStorage = () => {
  return React.useContext(AuthStorageContext);
};

export default useAuthStorage;