import AppNavBar from "../../Components/NavigationBar";
import "./Home.css";
import { BuyCarButton, SellCarButton } from "../../Components/BuySellButton";
import { useNavigate } from "react-router-dom";
import images from "../../Images/Images";

const Home = () => {
  const nav = useNavigate();
  return (
    <div
      className="homeContainer"
      style={{
        backgroundImage: `url(${images.car})`,
        backgroundSize: "cover",
        backgroundPositionY: "25%",
      }}
    >
      <AppNavBar></AppNavBar>
      <div className="homeBody">
        <div className="homeButton">
          <SellCarButton onClick={() => nav("/SellCarPage")}>
            <p className="buttonText"> Sell Your Car </p>
          </SellCarButton>
        </div>
        <div className="homeButton">
          <BuyCarButton
            onClick={() => {
              nav("/BuyCarPage");
            }}
          >
            <p className="buttonText">Buy A New Car</p>
          </BuyCarButton>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
