import React, { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import "../styles/ProductItem.css";
import { IProduct } from "../types/types";
import MyButton from "./UI/MyButton/MyButton";
interface ProductItemProps {
  product: IProduct;
}
const ProductItem: FC<ProductItemProps> = ({ product }) => {
  let { addItem, cardArr } = useContext(Context);
  const navigate = useNavigate();
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
        {cardArr.includes(product) ? (
          <MyButton onClick={() => addItem(product)} style={{ color: "green" }}>
            Add to card + 1
          </MyButton>
        ) : (
          <MyButton onClick={() => addItem(product)}>Add to card</MyButton>
        )}
      </div>
    </div>
  );
};
export default ProductItem;
