import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/layout/Header";
import CoinsCard from "./components/coins/CoinsCard";
import Footer from "./components/layout/Footer";

const App = () => {
  const [coinsData, setCoinsData] = useState([]);
  const fetchProducts = async()=>{
    try {
      const response = await fetch(
        "https://openapiv1.coinstats.app/coins",
        {
          headers:{
          'Content-Type': 'application/json',
          'X-API-KEY':process.env.REACT_APP_API
        }
      }
      );
      if (!response.ok) {
        throw new Error(`HTTP error:`);
      }
      const data = await response.json();
      setCoinsData(data.result);
    } catch (error) {
      console.error(`Could not get products: ${error}`);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(coinsData)

  return (
    <React.Fragment>
      <Header></Header>
      {coinsData&&<CoinsCard coinsData={coinsData}></CoinsCard>}
      <Footer></Footer>
    </React.Fragment>
  );
};

export default App;
