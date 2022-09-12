import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useState,
  useContext,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Service from "../API/Service";
import MyButton from "../components/UI/MyButton/MyButton";
import { useFetching } from "../hooks/useFetching";
import { IProduct } from "../types/types";
import { Context } from "../context/Context";
import "../styles/ProductItemPage.css";
const ProductItem: FC<PropsWithChildren> = () => {
  let { addItem } = useContext(Context);
  const [product, setProduct] = useState<IProduct>();
  const navigate = useNavigate();
  const params = useParams();
  const [fetchProduct, isLoading, error] = useFetching(async () => {
    const res = await Service.getProduct(params.id);
    setProduct(res);
  });
  useEffect(() => {
    fetchProduct();
  }, []);
  const handleClick = () => {
    addItem(product);
    navigate(-1);
  };
  return error ? (
    <h1 style={{ color: "red" }}>{error}</h1>
  ) : isLoading ? (
    <h1>wait</h1>
  ) : (
    <div
      className="productItem"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <MyButton onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
        Back
      </MyButton>
      <img className="product__img" src={product?.image} />
      <h1>{product?.title}</h1>
      <h2>{product?.price}</h2>
      <p>{product?.description}</p>
      <p>Rate: {product?.rating.rate}</p>
      <MyButton onClick={handleClick}>Add to card</MyButton>
    </div>
  );
};
export default ProductItem;
