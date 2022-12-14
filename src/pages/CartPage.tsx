import React, { FC, useContext, useEffect, useState } from "react";
import List from "../components/List";
import { Context } from "../context/Context";
import { IProduct } from "../types/types";
import MyButton from "../components/UI/MyButton/MyButton";
import MySelect from "../components/UI/select/MySelect";
import StickyTitle from "../components/UI/stickyTitle/StickyTitle";
import "../styles/CartPage.css";
const CartPage: FC = () => {
  let { cardArr, setCardArr, price, removeItem } = useContext(Context);
  const [value, setValue] = useState<string>("standart");
  const sortProducts = (sortValue: string): void => {
    if (sortValue == "low") {
      const filteredProducts = [...cardArr].sort(
        (a: IProduct, b: IProduct) => a.price - b.price
      );
      setCardArr(filteredProducts);
    } else if (sortValue == "high") {
      const filteredProducts = [...cardArr].sort(
        (a: IProduct, b: IProduct) => b.price - a.price
      );
      setCardArr(filteredProducts);
    }
  };
  const clearCart = () => {
    setCardArr([]);
  };
  useEffect(() => {
    sortProducts(value);
  }, [value]);
  return (
    <div className="cart__page">
      <StickyTitle>Your cart</StickyTitle>
      {cardArr.length == 0 ? (
        <h1>0 $</h1>
      ) : (
        <>
          <h1>{price.toFixed(2)} $</h1>
          <MyButton onClick={clearCart}>Clear</MyButton>
        </>
      )}
      <div className="cart__buttons">
        <MySelect value={value} setValue={setValue} />
      </div>
      <List
        //
        items={cardArr}
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
