import AppNavBar from "../../../Components/NavigationBar";
import "./BuyCarPage.css";
import VehicleTemplate from "../../../Components/VehicleTemplate";
const BuyCarPage = () => {
  return (
    <div className="PageContainer">
      <AppNavBar></AppNavBar>

      <div className="innerPageContainer">
        <div className="centreContainer">
          <div className="alignDiv"></div>
          <div className="contentDiv">
            <div className="vehicleContainer">
              <VehicleTemplate></VehicleTemplate>
              <VehicleTemplate></VehicleTemplate>
              <VehicleTemplate></VehicleTemplate>
              <VehicleTemplate></VehicleTemplate>
              <VehicleTemplate></VehicleTemplate>
              <VehicleTemplate></VehicleTemplate>
              <VehicleTemplate></VehicleTemplate>
              <VehicleTemplate></VehicleTemplate>
            </div>
          </div>
          <div className="alignDiv"></div>
        </div>
      </div>
    </div>
  );
};

export default BuyCarPage;
