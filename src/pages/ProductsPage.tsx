import React, { FC, useState, useEffect, useContext } from "react";
import List from "../components/List";
import ProductItem from "../components/ProductItem";
import { IProduct } from "../types/types";
import Service from "../API/Service";
import { useFetching } from "../hooks/useFetching";
import { Context } from "../context/Context";
import MyButton from "../components/UI/MyButton/MyButton";
import { useNavigate, useParams } from "react-router-dom";
import MySelect from "../components/UI/select/MySelect";
const ProductsPage: FC = () => {
  const params = useParams();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [value, setValue] = useState<string>("standart");
  const [sorted, setSorted] = useState<IProduct[]>(products);
  const navigate = useNavigate();
  const [fetchProducts, isLoading, error] = useFetching(async () => {
    const response = await Service.getProducts(params.categories);
    console.log();
    setProducts(response);
    setSorted(response);
  });
  const sortProducts = (sortValue: string) => {
    if (sortValue == "low") {
      const filteredProducts = [...products].sort(
        (a: IProduct, b: IProduct) => a.price - b.price
      );
      setSorted(filteredProducts);
    } else if (sortValue == "high") {
      const filteredProducts = [...products].sort(
        (a: IProduct, b: IProduct) => b.price - a.price
      );
      setSorted(filteredProducts);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    sortProducts(value);
  }, [value]);
  return error ? (
    <div style={{ color: "red" }}>{error}</div>
  ) : isLoading ? (
    <h1>wait</h1>
  ) : (
    <div>
      <MyButton
        onClick={() => navigate(-1)}
        style={{ cursor: "pointer", width: "100px" }}
      >
        Back
      </MyButton>
      <MySelect value={value} setValue={setValue} />
      <List
        items={sorted}
        renderItem={(product: IProduct) => (
          <ProductItem key={product.id} product={product} />
        )}
      />
    </div>
  );
};
export default ProductsPage;
