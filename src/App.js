import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import BuyCarPage from "./Pages/Home/BuyCarPage/BuyCarPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SellCarPage from "./Pages/Home/SellCarPage/SellCarPage";
import ChosenImageContext from "./ContextFiles/ChosenImageContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/BuyCarPage" element={<BuyCarPage></BuyCarPage>}></Route>
        <Route
          path="/SellCarPage"
          element={<SellCarPage></SellCarPage>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
