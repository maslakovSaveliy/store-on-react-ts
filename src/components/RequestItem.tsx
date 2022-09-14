import React, { FC } from "react";
import { useFetching } from "../hooks/useFetching";
import Service from "../API/Service";
import { FieldError, useForm } from "react-hook-form";
interface FormValues {
  title: string;
  price: number;
  description: string;
  category: {
    [key: string]: string;
  };
}
const RequestItem: FC = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormValues>({ mode: "onBlur" });
  const sendReview = handleSubmit((data) => {
    console.log(data);
    reset();
  });
  return (
    <form onSubmit={sendReview}>
      <label>
        Categories
        <select {...register("category")}>
          <option value="electronics">electronics</option>
          <option value="jewelery">jewelery</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
        </select>
      </label>
      <label>
        Title
        <input
          type="text"
          {...register("title", {
            required: "The field is empty",
          })}
          placeholder="iPhone 14 Pro"
        />
        <div>
          {errors?.title && <p>{errors?.title?.message || "Error!"}</p>}
        </div>
      </label>
      <label>
        Price
        <input
          type="number"
          {...register("price", {
            required: "The field is empty",
            min: {
              value: 1,
              message: "Min 1",
            },
          })}
          placeholder="700 $"
        />
        <div>
          {errors?.price && <p>{errors?.price?.message || "Error!"}</p>}
        </div>
      </label>
      <label>
        Description
        <input
          type="textarea"
          {...register("description", {
            required: "The field is empty",
            minLength: {
              value: 20,
              message: "Min 20 symbols",
            },
            maxLength: {
              value: 200,
              message: "Max 200 symbols",
            },
          })}
          placeholder="Let your mind here"
        />
        <div>
          {errors?.description && (
            <p>{errors?.description?.message || "Error!"}</p>
          )}
        </div>
      </label>
      <button type="submit" disabled={!isValid}>
        Add Item
      </button>
    </form>
  );
};
export default RequestItem;
