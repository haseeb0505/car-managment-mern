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
          <h3 className="sidebarTitle">Cars</h3>
          <ul className="sidebarList">
            <Link to="/cars" className="link">
              <li className="sidebarListItem">
                <TimeToLeave className="sidebarIcon" />
                Cars
              </li>
            </Link>

          </ul>
          <ul className="sidebarList">
            <Link to="/newcar" className="link">
              <li className="sidebarListItem">
                <TimeToLeave className="sidebarIcon" />
                Add Car
              </li>
            </Link>

          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Category</h3>
          <ul className="sidebarList">
            <Link to="/categories" className="link">
              <li className="sidebarListItem">
                <TimeToLeave className="sidebarIcon" />
                Categories
              </li>
            </Link>

          </ul>
          <ul className="sidebarList">
            <Link to="/newcategory" className="link">
              <li className="sidebarListItem">
                <TimeToLeave className="sidebarIcon" />
                Add Category
              </li>
            </Link>

          </ul>
        </div>


      </div>
    </div>
  );
}
