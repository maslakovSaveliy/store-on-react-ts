import React, { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Service from "../API/Service";
import List from "../components/List";
import MyButton from "../components/UI/MyButton/MyButton";
import { Context } from "../context/Context";
import { useFetching } from "../hooks/useFetching";
import "../styles/Categories.css";
const Categories: FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  let { setCategory } = useContext(Context);
  const navigate = useNavigate();
  const [fetchCategories, isLoading, error] = useFetching(async () => {
    const res = await Service.getCategories();
    setCategories(res);
  });
  const clickHandler = (category: string) => {
    setCategory(category);
    navigate("/products");
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return error ? (
    <h1 style={{ color: "red" }}>{error}</h1>
  ) : isLoading ? (
    <h1>Wait</h1>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <List
        class="categories"
        items={categories}
        renderItem={(item: string) => (
          <MyButton key={item} onClick={() => clickHandler(item)}>
            {item}
          </MyButton>
        )}
      />
    </div>
  );
};
export default Categories;
