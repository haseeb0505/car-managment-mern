import axios from "axios";
import { useEffect, useState } from "react";
import "./widgetLg.css";

export default function WidgetLg() {
  const [Newcar, setNewCar] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`/cars?new=true`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).data.accessToken,
          },
        });

        setNewCar(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Cars</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Name</th>
            <th className="widgetLgTh">Date Added</th>
            <th className="widgetLgTh">Model</th>
            <th className="widgetLgTh">Color</th>
            <th className="widgetLgTh">Reg-No</th>
          </tr>

          {Newcar.map((item) => (
            <tr className="widgetLgTr" key={item._id}>
              <td className="widgetLgUser">
                <img
                  src="https://media.istockphoto.com/vectors/car-icon-auto-vehicle-isolated-transport-icons-automobile-silhouette-vector-id1273534607?k=20&m=1273534607&s=612x612&w=0&h=Uynt53JLF7_JUxklSlCNP-KVm-CNLUkgpgewc2AOO2I="
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">{item.name}</span>
              </td>
              <td className="widgetLgCreatedAt">{item.createdAt}</td>
              <td className="widgetLgModel">{item.model}</td>
              <td className="widgetLgColor">{item.color}</td>
              <td className="widgetLgRegNo">
                {item.registrationNo}
              </td>
            </tr>
          ))}


        </tbody>
      </table>
    </div>
  );
}
