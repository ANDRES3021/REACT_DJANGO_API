import {  Navigate } from "react-router-dom";
import '/home/andrespardo/Desktop/react chuck/chuch/src/App.css';
import React from 'react';

import {useContext} from 'react'
import { AuthContext } from "../context/AuthContext";

function PrivateRoute({ children }) {
    let user = useContext(AuthContext)
    
    console.log(user)
    return user ? children : <Navigate to="/" />;
  }

export {PrivateRoute}