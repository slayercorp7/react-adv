import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import React from 'react';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  maxCount?: number;
}

export const ProductButtons = ({className, style, maxCount} : Props) => {

  //maxcount, 
    const { increaseBy, counter } = useContext(ProductContext);

    // ismaxreached = usecallback,[counter, maxCount]
    const isMaxReached = useCallback(
      () => !!maxCount && counter === maxCount,
      [counter, maxCount],
    );
  
    //true count===maxcount
    //false si no 
    return (
      <div 
      className={`${styles.buttonsContainer} ${className}`}
      style={style}
      >
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}> {counter} </div>
        <button className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`} onClick={() => increaseBy(1)}>
          +
        </button>
      </div>
    );
  };