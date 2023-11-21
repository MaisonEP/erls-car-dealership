import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { purple, orange, blue } from "@mui/material/colors";

const SellCarButton = styled(Button)({
  backgroundColor: orange[400],
  fontFamily: ["cursive"],
  fontSize: 20,
  height: 400,
  width: 400,
  borderRadius: "100%",
  "&:hover": { backgroundColor: orange[900] },
});
const BuyCarButton = styled(Button)({
  backgroundColor: blue[700],
  fontFamily: ["cursive"],
  fontSize: 20,
  height: 400,
  width: 400,
  borderRadius: "100%",
  "&:hover": { backgroundColor: orange[900] },
});

export default BuyCarButton;
export { BuyCarButton, SellCarButton };
