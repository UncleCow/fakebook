import React, { useEffect, useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import { ImageViewer } from "react-image-viewer-dv";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../css/Photos.css";
import { useParams } from "react-router-dom";
import checkLogin from "../login/LogicLogin";
import { fetch9Friends, fetch9Photos } from "../../store/actions/information";

function PhotoIcon(props) {
  return (
    <Grid item xs={2} md={2}>
      <div className="imgView">
        <ImageViewer>
          <img src={props ? props.image : ""} alt="image" />
        </ImageViewer>
        <button className="buttonDel">
          <DeleteIcon className="iconDel" />
        </button>
      </div>
    </Grid>
  );
}
function Photos() {
  const { userId } = useParams();
  const id = userId ? userId : checkLogin();
  const [listPhotos, setListPhotos] = useState([]);

  useEffect(async () => {
    await fetch9Photos(id).then((data) => {
      ;
      setListPhotos(data);
    });
  }, [id]);

  return (
    <div className="photoWrapper">
      <div className="subPhotoWrapper">
        <div className="photoBarTitle">
          <h4>
            <ImageIcon className="iconImage" />
          </h4>
          <h4 className="photoTitle">Photos</h4>
        </div>

        <div className="photoBarDetail">
          <div className="photoCollection">
            <Grid container xs={12} spacing={2}>
              {listPhotos[0] ? <PhotoIcon image={listPhotos[0]} /> : ""}
              {listPhotos[1] ? <PhotoIcon image={listPhotos[1]} /> : ""}
              {listPhotos[2] ? <PhotoIcon image={listPhotos[2]} /> : ""}
              {listPhotos[3] ? <PhotoIcon image={listPhotos[3]} /> : ""}
              {listPhotos[4] ? <PhotoIcon image={listPhotos[4]} /> : ""}
              {listPhotos[5] ? <PhotoIcon image={listPhotos[5]} /> : ""}
              {listPhotos[6] ? <PhotoIcon image={listPhotos[6]} /> : ""}
              {listPhotos[7] ? <PhotoIcon image={listPhotos[7]} /> : ""}
              {listPhotos[8] ? <PhotoIcon image={listPhotos[8]} /> : ""}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photos;
