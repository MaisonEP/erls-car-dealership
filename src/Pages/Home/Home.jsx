import AppNavBar from "../../Components/NavigationBar";
import "./Home.css";
import HomeButton, { SellCarButton } from "./BuySellButton";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="homeContainer">
      <AppNavBar></AppNavBar>
      <div className="homeBody">
        <div className="homeButton">
          <HomeButton>
            <p className="buttonText"> Sell Your Car </p>
          </HomeButton>
        </div>
        <div className="homeButton">
          <SellCarButton
            onClick={() => {
              navigate("/BuyCarPage");
            }}
          >
            <p className="buttonText">Buy A New Car</p>
          </SellCarButton>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
