import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "axios";

export default function FeaturedInfo() {

  const [totalcars, setTotalCars] = useState(0);
  const [owncars, setOwnCars] = useState(0);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get(`/cars/count/${user.data._id}`, {
          headers: {
            token:
              "bearer " + JSON.parse(localStorage.getItem("user")).data.accessToken,
          },
        });
        setOwnCars(res.data.yourCars)
        setTotalCars(res.data.totalCars)

      } catch (error) {
        console.log(error)
      }

    }
    getStats();
  }, [user]);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total Cars</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{totalcars}</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Your Cars</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{owncars}</span>
          <span className="featuredMoneyRate">
            +1.4 <ArrowUpward className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

    </div>
  );
}
