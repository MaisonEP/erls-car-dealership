import FormFields from "../../../Components/FormFields";
import AppNavBar from "../../../Components/NavigationBar";
import "./SellCarPage.css";
import SelectImage from "../../../Components/SelectImage";
import { ChosenImageContext } from "../../../ContextFiles/ChosenImageContext";
import { useState } from "react";
const SellCarPage = () => {
  const [chosenImage, setchosenImage] = useState();

  return (
    <div className="sellCarContainer">
      <AppNavBar></AppNavBar>
      <div className="sellCarForm">
        <div className="formContainer">
          <div className="innerFormContainer">
            <ChosenImageContext.Provider
              value={{
                chosenImage: chosenImage,
                setchosenImage: setchosenImage,
              }}
            >
              <div className="vehicleImage">
                <SelectImage></SelectImage>
              </div>
              <div className="vehicleForm">
                <FormFields></FormFields>
              </div>
            </ChosenImageContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellCarPage;
