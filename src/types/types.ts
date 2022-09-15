import React, { FC } from "react";
import { Message, MultipleFieldErrors, Ref } from "react-hook-form";
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
export interface IProductRequest {
  category: string;
  wishes: string;
  price: string;
  title: string;
}
