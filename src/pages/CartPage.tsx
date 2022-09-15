import React, { FC, useContext, useEffect, useState } from "react";
import List from "../components/List";
import { Context } from "../context/Context";
import { IProduct } from "../types/types";
import MyButton from "../components/UI/MyButton/MyButton";
import MySelect from "../components/UI/select/MySelect";
import StickyTitle from "../components/UI/stickyTitle/StickyTitle";
const CartPage: FC = () => {
  let { cardArr, price, removeItem } = useContext(Context);
  const [value, setValue] = useState<string>("standart");
  const [sorted, setSorted] = useState<IProduct[]>(cardArr);
  const sortProducts = (sortValue: string) => {
    if (sortValue == "low") {
      const filteredProducts = [...cardArr].sort(
        (a: IProduct, b: IProduct) => a.price - b.price
      );
      setSorted(filteredProducts);
    } else if (sortValue == "high") {
      const filteredProducts = [...cardArr].sort(
        (a: IProduct, b: IProduct) => b.price - a.price
      );
      setSorted(filteredProducts);
    }
  };
  useEffect(() => {
    sortProducts(value);
  }, [value, cardArr]);
  return (
    <div>
      <StickyTitle>Your cart</StickyTitle>
      <h1>{price.toFixed(2)} $</h1>
      <MySelect value={value} setValue={setValue} />
      <List
        items={sorted}
        renderItem={(product: IProduct, index: number | undefined) => (
          <div className="product" key={index}>
            <img src={product.image} />
            <h2>{product.title}</h2>
            <h2>{product.price}</h2>
            <MyButton onClick={() => removeItem(product, index)}>
              Remove
            </MyButton>
          </div>
        )}
      />
    </div>
  );
};
export default CartPage;