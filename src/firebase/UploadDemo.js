import React, { useState } from "react";
import { useSelector } from "react-redux";
import { storage } from "./index";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import checkLogin from "../components/login/LogicLogin";
import NotFound from "../components/main/NotFound";
import { fetchAllInfo } from "../store/actions/information";
import { addPost } from "../store/actions/grow";

const UploadDemo = (props) => {
  const [progress, setProgress] = useState(0);
  // const formHandler = (e) => {
  //   e.preventDefault();
  //   const file = e.target[0].files[0];
  //   uploadFiles(file);
  // };

  const inputHandler = () => {
    const file = document.getElementById("file").files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    if (!file) {
      return;
    }
    const filename = Math.random().toString(20).substring(2);
    ;
    const storageRef = ref(storage, `/file/${filename}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          props.setImage(url)
        });
      }
    );
  };
  const idlogin = checkLogin();
  ;
  let [isAdmin, setIsAdmin] = useState("");
  const check = async () => {
    await fetchAllInfo(idlogin).then((data) => {
      setIsAdmin(data.role_id);
    });
  };
  check();
  ;
  return (
    <div style={{ width: "100%" }}>
      {isAdmin ? (
        <div style={{ width: "100%" }}>
          <form >
            <input type="file" id="file" className="input" />
            <button type="button" onClick={inputHandler}>
              Upload Image
            </button>
            <h3>Uploaded {progress}%</h3>
          </form>
          
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default UploadDemo;
