import React, { useState } from "react";
import classes from "./CoinsCard.module.css";
import SingleCoin from "./SingleCoin";
const CoinsCard = (props) => {
  const coinsData = props.coinsData;
  const [searchHandler, setSearchHandler] = useState("");
  const [rerender, setRerender] = useState(false);
//uploadwork
  coinsData.sort((x) => localStorage.getItem(x.id) && -1);
  const FilterCoins = coinsData.filter((item) =>
    item.name.toLowerCase().includes(searchHandler.toLowerCase())
  );
  const contextCoins = FilterCoins.map((item) => (
    <SingleCoin
      rerender={setRerender}
      key={item.id}
      id={item.id}
      icon={item.icon}
      name={item.name}
      symbol={item.symbol}
      price={item.price}
      volume={item.volume}
    ></SingleCoin>
  ));
  return (
    <React.Fragment>
      <input type="text" placeholder="Search..."
      onChange={(e) => {setSearchHandler(e.target.value);}}
        className={classes.search}
      ></input>
      <ul className={classes.unorderedLists}>{contextCoins}</ul>;
    </React.Fragment>
  );
};

export default CoinsCard;
