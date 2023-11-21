import AppNavBar from "../../../Components/NavigationBar";
import "./BuyCarPage.css";
import VehicleTemplate from "../../../Components/VehicleTemplate";
import { useEffect, useState } from "react";
import ChosenImageContext from "../../../ContextFiles/ChosenImageContext";

const BuyCarPage = () => {
  const [mydata, setmydata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/allvehicles")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setmydata(data);
      });
  }, []);
  return (
    <div className="PageContainer">
      <AppNavBar></AppNavBar>

      <div className="innerPageContainer">
        <div className="centreContainer">
          <div className="alignDiv"></div>
          <div className="contentDiv">
            <div className="vehicleContainer">
              {mydata.map((itemOfmydata) => {
                return (
                  <VehicleTemplate
                    carBrand={itemOfmydata.carBrand}
                    carModel={itemOfmydata.carModel}
                    carMilage={itemOfmydata.carMilage}
                    carPrice={itemOfmydata.carPrice}
                    manufacturerDate={itemOfmydata.manufacturerDate}
                  ></VehicleTemplate>
                );
              })}
            </div>
          </div>
          <div className="alignDiv"></div>
        </div>
      </div>
    </div>
  );
};

export default BuyCarPage;
