import "./topbar.css";
// import { Link, useHistory } from "react-router-dom";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useContext } from "react";
export default function Topbar() {
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Car management</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>

          <img
            src={
              "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
            }
            alt=""
            className="topAvatar"
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
}
