import React, { useReducer } from "react";
import { authSlice } from "../features/auth/authSlice";
import { useSelector, useDispatch } from 'react-redux'
let AuthContext = React.createContext();

const AuthProvider = props => {
 // let [auth, changleAuth] = useReducer(authSlice);
 const { user, isLoading,} = useSelector((state) => state.auth)
  let value = { user, isLoading};
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
