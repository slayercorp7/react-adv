import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs, InitialValues } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  InitialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  InitialValues,
}: useProductArgs) => {
  const [counter, setcounter] = useState<number>(InitialValues?.count || value);

  const isMounted = useRef(false);
  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (InitialValues?.maxCount) {
      newValue = Math.min(newValue, InitialValues.maxCount);
    }
    setcounter(newValue);
    onChange && onChange({ count: newValue, product });
  };
  const reset = () => {
    setcounter(InitialValues?.count || value);
  }

  useEffect(() => {
    if (!isMounted.current) return;
    setcounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);
  return {
    counter,
    increaseBy,
    maxCount: InitialValues?.maxCount,
    isMaxCountReached:
      !!InitialValues?.count && InitialValues.maxCount === counter,
      reset,
  };
};
