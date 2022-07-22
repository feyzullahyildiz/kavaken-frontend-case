import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import styles from './Counter.module.css';

export function Basket() {
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
    </div>
  );
}
