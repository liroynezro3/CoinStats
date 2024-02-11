import React, { useEffect, useState } from "react";
import classes from "./SingleCoin.module.css";
function SingleCoin(props) {
  const [follow, setFollow] = useState(true);
  const SavedCoin = localStorage.getItem(props.id);

  useEffect(() => {
    if (SavedCoin) {
      setFollow(false);
    }
  }, []);

  const setFollowCoin = () => {
    if (follow) {
      localStorage.setItem(props.id, props.id);
      setFollow(false);
    } else {
      setFollow(true);
      localStorage.removeItem(props.id);
    }
    props.rerender((prev) => !prev);
  };

  return (
    <li key={props.id} className={classes.coin}>
      <button
        onClick={setFollowCoin}
        className={follow ? classes.follow : classes.unfollow}
      >
        {follow && <span>Follow</span>}
        {!follow && <span>unfollow</span>}
      </button>
      <img src={props.icon} alt={props.name}></img>
      <h2>{props.name}</h2>
      <h3>Symbol: {props.symbol}</h3>
      <h3>Price:{props.price}</h3>
      <h4>Volume:{props.volume}</h4>
    </li>
  );
}

export default SingleCoin;
