import React, { useEffect, useState } from "react";
import PeopleIcon from "@mui/icons-material/People";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../css/Friends.css";
import checkLogin from "../login/LogicLogin";
import { fetch9Friends } from "../../store/actions/information";
import { useParams } from "react-router-dom";

const FriendsSingle = (props) => {
  const link = `http://localhost:3000/profile?id=${props.user ? props.user.id : 0}`
  return (
    <Grid item xs={6} xl={6}>
      <div className="friendList">
        <img
          src={props.user ? props.user.avatar : ""}
          alt="imgFriend"
        />
        <a href={link}>
          <p>{props.user ? props.user.fullname : ""}</p>
        </a>
        <button>
          <DeleteIcon />
        </button>
      </div>
    </Grid>
  );
};

function Friends() {
  const [listFriends, setListFriends] = useState([]);
  const { userId } = useParams();
  const id = userId ? userId : checkLogin();
  useEffect(async () => {
    await fetch9Friends(id).then((data) => {
      ;
      setListFriends(data);
    });
    
  }, []);
  return (
    <div className="friendWrapper">
      <div className="subFriendWrapper">
        <div className="friendBarTitle">
          <h4>
            <PeopleIcon className="iconPeople" style={{ fontSize: "30px" }} />
          </h4>
          <h4 className="friendTitle">Friends</h4>
        </div>
      </div>

      <div className="friendBarDetail">
        <div className="friendCollection">
          <Grid container xs={12} spacing={2}>
            {listFriends[0] ? <FriendsSingle user={listFriends[0]} /> : <></>  }
            {listFriends[1] ? <FriendsSingle user={listFriends[1]} /> : <></>  }
            {listFriends[2] ? <FriendsSingle user={listFriends[2]} /> : <></>  }
            
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Friends;
