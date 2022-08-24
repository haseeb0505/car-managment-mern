import "./sidebar.css";
import {
  HomeOutlined,
  TimeToLeave,

} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <HomeOutlined className="sidebarIcon" />
                Home
              </li>
            </Link>

          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/cars" className="link">
              <li className="sidebarListItem">
                <TimeToLeave className="sidebarIcon" />
                cars
              </li>
            </Link>

          </ul>
        </div>


      </div>
    </div>
  );
}