import CartPage from "../pages/CartPage";
import Categories from "../pages/Categories";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import ProductItem from "../pages/ProductItemPage";
import ProductPage from "../pages/ProductsPage";
import { IRoute } from "../types/types";
export const publicRoutes: IRoute[] = [{ path: "/login", element: Login }];
export const privateRoutes: IRoute[] = [
  { path: "/", element: HomePage },
  { path: "/categories", element: Categories },
  { path: "/categories/:categories", element: ProductPage },
  { path: "/products/:id", element: ProductItem },
  { path: "/card", element: CartPage },
];
