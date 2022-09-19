import React, { FC, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "../context/Context";
import { privateRoutes, publicRoutes } from "../router/routes";
import { IRoute } from "../types/types";
const AppRouter: FC = () => {
  const { user } = useContext(Context);
  return user ? (
    <Routes>
      {privateRoutes.map((route: IRoute, index: number) => (
        <Route key={index} path={route.path} element={<route.element />} />
      ))}
      <Route path="/login" element={<Navigate to="/" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route: IRoute, index: number) => (
        <Route key={index} path={route.path} element={<route.element />} />
      ))}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
export default AppRouter;
