import React, { FC } from "react";
export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export interface IRoute {
  path: string;
  element: FC;
}
