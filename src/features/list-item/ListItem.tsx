import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import styles from "./ListItem.module.css";

interface Props {
  id: number;
  title: string;
  image: string;
  currency: string;
  price: string;
}
export function ListItem({
  id,
  image,
  title,
  price,
  currency,
  ...props
}: Props) {
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={title} />

      <div className={styles.title}>{title}</div>
      <div className={styles.buttom}>
        <div>{`${currency} ${(+price).toFixed(2)}`}</div>
        <button className={styles.addBasket}>ADD BASKET</button>
      </div>
    </div>
  );
}
