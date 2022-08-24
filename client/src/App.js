import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import CarList from "./pages/carList/CarList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";

import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";



function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>

        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>


        {user ?

          (<>
            <Topbar />
            <div className="container">
              <Sidebar />

              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/cars">
                <CarList />
              </Route>
              <Route path="/car/:userId">
                <User />
              </Route>
              <Route path="/newcar">
                <NewUser />
              </Route>

            </div> </>) : <Redirect to="/login" />}

      </Switch>
    </Router>
  );
}

export default App;
