import React, { FC, useContext } from "react";
import { useFetching } from "../hooks/useFetching";
import Service from "../API/Service";
import { FieldError, useForm } from "react-hook-form";
import { Context } from "../context/Context";
interface FormValues {
  title: string;
  price: string;
  wishes: string;
  category: string;
}
const RequestItem: FC = () => {
  let { userEmail } = useContext(Context);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormValues>({ mode: "onBlur" });
  let { setModalVisible } = useContext(Context);
  const submit = handleSubmit(async (data) => {
    await Service.sendMessage(data, userEmail);
    console.log(userEmail);
    reset();
    setModalVisible(false);
  });
  return (
    <form onSubmit={submit}>
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
        Whishes
        <input
          type="textarea"
          {...register("wishes", {
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
          {errors?.wishes && <p>{errors?.wishes?.message || "Error!"}</p>}
        </div>
      </label>
      <button type="submit" disabled={!isValid}>
        Request Item
      </button>
    </form>
  );
};
export default RequestItem;
