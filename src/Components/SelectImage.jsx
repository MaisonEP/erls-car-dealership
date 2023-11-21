import { useContext, useState } from "react";
import "./SelectImage.css";
import { ChosenImageContext } from "../ContextFiles/ChosenImageContext";

const SelectImage = () => {
  const listingImage = useContext(ChosenImageContext);

  function image(image) {
    listingImage.setchosenImage(image.target.files[0]);
    console.dir(URL.createObjectURL(image.target.files[0]));
    const fileReader = new FileReader();
    fileReader.onload = function () {
      console.log("fileReader", fileReader);
    };

    fileReader.readAsDataURL(image.target.files[0]);
  }

  return (
    <div className="selectImageContainer">
      {Boolean(listingImage.chosenImage) && (
        <img
          src={URL.createObjectURL(listingImage.chosenImage)}
          className="vehicleImage"
        ></img>
      )}
      <input type="file" name="file" onChange={image} />
    </div>
  );
};

export default SelectImage;
