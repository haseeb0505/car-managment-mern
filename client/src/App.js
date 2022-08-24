import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import CarList from "./pages/carList/CarList";
import Car from "./pages/car/Car";
import NewCar from "./pages/newCar/NewCar";

import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";
import CategoryList from "./pages/categoryList/CategoryList";
import Category from "./pages/category/Category";
import NewCategory from "./pages/newCategory/NewCategory";



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
                <Car />
              </Route>
              <Route path="/newcar">
                <NewCar />
              </Route>
              <Route path="/categories">
                <CategoryList />
              </Route>
              <Route path="/category/:Id">
                <Category />
              </Route>
              <Route path="/newcategory">
                <NewCategory />
              </Route>

            </div> </>) : <Redirect to="/login" />}

      </Switch>
    </Router>
  );
}

export default App;
