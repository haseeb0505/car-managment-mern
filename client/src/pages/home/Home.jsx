import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import React, { useEffect, useMemo } from "react";
import axios from "axios";

export default function Home() {
  const months = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const [userStats, setUserstats] = React.useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/cars/stats", {
          headers: {
            token:
              "bearer " + JSON.parse(localStorage.getItem("user")).data.accessToken,
          },
        });

        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });

        statsList.map((item) =>
          setUserstats((prev) => [
            ...prev,
            { name: months[item._id - 1], "New Cars": item.total },
          ])
        );
      } catch (error) {
        console.log(error);
      }
    };

    getStats();
  }, [months]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="Cars Analytics" grid dataKey="New Cars" />
      <div className="homeWidgets">
        <WidgetLg />
      </div>
    </div>
  );
}
