import { useState } from "react";
import { IProduct } from "../types/types";
export const useAddToCard = () => {
  const [cardArr, setCardArr] = useState<IProduct[]>([]);
  const [price, setPrice] = useState<number>(0);
  const addItem = (item: IProduct) => {
    setCardArr([...cardArr, item]);
    setPrice(price + item.price);
  };
  const removeItem = (item: IProduct, index: number) => {
    setCardArr(cardArr.filter((el, ind) => ind !== index));
    setPrice(price - item.price);
  };
  return [cardArr, setCardArr, price, addItem, removeItem];
};
