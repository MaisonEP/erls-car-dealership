import "./VehicleTemplate.css";

const VehicleTemplate = ({
  carBrand,
  carModel,
  manufacturerDate,
  carMilage,
  carPrice,
}) => {
  return (
    <div className="vehicleTempContainer">
      <div className="vehiclePicture"></div>
      <div className="vehicleInfo">
        <p>{carBrand}</p>
        <p>{carModel}</p>
        <p>{carMilage}</p>
        <p>{carPrice}</p>
        <p>{manufacturerDate}</p>
      </div>
    </div>
  );
};

export default VehicleTemplate;
