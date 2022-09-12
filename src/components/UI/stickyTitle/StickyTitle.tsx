import React, { FC, PropsWithChildren } from "react";
import "../../../styles/StickyTitle.css";
const StickyTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="fixed">
      <h1>{children}</h1>
    </div>
  );
};
export default StickyTitle;
