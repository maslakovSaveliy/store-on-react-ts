import React, { FC, useState } from "react";
interface SelectProps {
  value: string;
  setValue: (event: string) => void;
}
const MySelect: FC<SelectProps> = ({ value, setValue }) => {
  return (
    <select
      value={value}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
      }}
    >
      <option disabled value="">
        Sort
      </option>
      <option value="low">Price low</option>
      <option value="high">Price high</option>
    </select>
  );
};
export default MySelect;
