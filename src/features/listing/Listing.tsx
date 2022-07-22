import React, { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ListItem } from "../list-item/ListItem";
import styles from "./Listing.module.css";
import { fetchListingAsync } from "./listingSlice";

export function Listing() {
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const listing = useAppSelector((state) => state.listing);
  // console.log("listing", listing);
  const incrementValue = Number(incrementAmount) || 0;
  useEffect(() => {
    dispatch(fetchListingAsync());
  }, []);
  if (listing.status === "failed") {
    return <div>Network Error</div>;
  }
  if (listing.status === "loading") {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.container}>
      {listing.data.map((l) => (
        <ListItem
          key={l.id}
          id={l.id}
          image={l.image}
          title={l.name}
          currency={l.currency}
          price={l.price}
        />
      ))}
    </div>
  );
}
