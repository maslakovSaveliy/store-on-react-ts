import React, { FC, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Context } from "../context/Context";
import "../styles/ProductItem.css";
import { IProduct } from "../types/types";
import MyButton from "./UI/MyButton/MyButton";
interface ProductItemProps {
  product: IProduct;
}
const ProductItem: FC<ProductItemProps> = ({ product }) => {
  let { addItem, cardArr } = useContext(Context);
  const [onAnimation, setOnAnimation] = useState<boolean>(false);
  const navigate = useNavigate();
  const click = (product: IProduct) => {
    setOnAnimation(true);
    addItem(product);
    setTimeout(() => {
      setOnAnimation(false);
    }, 100);
  };
  return (
    <div className="product">
      <h2 className="title">
        {product.id}. {product.title}
      </h2>
      <img src={product.image} />
      <h3 className="price">{product.price} $</h3>
      <div className="buttons">
        <MyButton onClick={() => navigate(`/products/${product.id}`)}>
          Show
        </MyButton>
        <CSSTransition timeout={100} in={onAnimation}>
          <button className="add__btn" onClick={() => click(product)}>
            Add to card
          </button>
        </CSSTransition>
      </div>
    </div>
  );
};
export default ProductItem;
