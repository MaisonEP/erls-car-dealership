import { useContext, useState } from "react";
import "./FormFields.css";
import { Button } from "@material-ui/core";
import { ChosenImageContext } from "../ContextFiles/ChosenImageContext";
import SelectImage from "./SelectImage";

const FormFields = () => {
  const [carBrand, setCarBrand] = useState("");
  const [carModel, setCarModel] = useState("");
  const [manufacturerDate, setManufacturerDate] = useState();
  const [carMilage, setCarMilage] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const image = useContext(ChosenImageContext);

  const submitListing = (event) => {
    const carListing = {
      carBrand,
      carModel,
      manufacturerDate,
      carMilage,
      carPrice,
      image: image.chosenImage,
    };

    fetch("http://localhost:8080/addVehicle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carListing),
    }).then(() => {
      console.log("new listing added");
    });
  };

  return (
    <div className="inputContainer">
      <div className="inputFormsAndLabels">
        <p>Car Brand</p>
        <input
          className="inputBox"
          type="text"
          required
          value={carBrand}
          onChange={(event) => {
            setCarBrand(event.target.value);
          }}
        ></input>
        <p>Car Model</p>
        <input
          className="inputBox"
          type="text"
          required
          value={carModel}
          onChange={(event) => {
            setCarModel(event.target.value);
          }}
        ></input>
        <p>Manufacture Year</p>
        <input
          className="inputBox"
          placeholder="YYYY"
          type="text"
          required
          value={manufacturerDate}
          onChange={(event) => {
            setManufacturerDate(event.target.value);
          }}
        ></input>
        <p> Car Mileage</p>

        <input
          className="inputBox"
          type="text"
          required
          value={carMilage}
          onChange={(event) => {
            setCarMilage(event.target.value);
          }}
        ></input>
        <p> Car Price</p>

        <input
          className="inputBox"
          type="text"
          required
          value={carPrice}
          onChange={(event) => {
            setCarPrice(event.target.value);
          }}
        ></input>
      </div>
      <Button className="Submit" onClick={submitListing}>
        Submit
      </Button>
    </div>
  );
};

export default FormFields;
