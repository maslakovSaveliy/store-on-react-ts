import axios from "axios";
import { IProduct } from "../types/types";
export default class Service {
  static async getProducts(category: string) {
    const res = await axios.get<IProduct[]>(
      "https://fakestoreapi.com/products/category/" + category
    );
    return res.data;
  }
  static async getProduct(id: string | undefined) {
    const res = await axios.get<IProduct>(
      "https://fakestoreapi.com/products/" + id
    );
    return res.data;
  }
  static async getCategories() {
    const res = await axios.get<string[]>(
      "https://fakestoreapi.com/products/categories"
    );
    return res.data;
  }
}
