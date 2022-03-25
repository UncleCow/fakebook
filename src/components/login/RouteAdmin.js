import React, { useState } from "react";

import { useSelector } from "react-redux";
import UploadDemo from "../../firebase/UploadDemo";
import { Routes, Route } from "react-router-dom";
import { fetchAllInfo } from "../../store/actions/information";
import NotFound from "../main/NotFound";
import checkLogin from "./LogicLogin";

function RouteAdmin() {
  let [isAdmin, setIsAdmin] = useState("");
  let isLogin = checkLogin;
  const check = async () => {
    await fetchAllInfo(6).then((data) => {
      setIsAdmin(data.role_id);
    });
  };
  check();
  ;
  return (
    <div>
    {isLogin ? <div>
      {isAdmin === 0 ? (
        <Routes>
          <Route path="/firebase" element={<UploadDemo />} />
        </Routes>
      ) : (
        <NotFound/>
      )}
    </div> : <div></div> }
    </div>
    
  );
}

export default RouteAdmin;
