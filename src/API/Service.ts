import axios from "axios";
import { IProduct, IProductRequest } from "../types/types";
export default class Service {
  static async getProducts(category: string | undefined) {
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
  static async sendMessage(product: IProductRequest) {
    const UTFtitle = encodeURIComponent(product.title);
    const UTFwishes = encodeURIComponent(product.wishes);
    const UTFprice = encodeURIComponent(product.price);
    const UTFcategory = encodeURIComponent(product.category);
    axios.get(
      `https://api.telegram.org/bot5530618039:AAHz04oS2G7n4s4xVHX3WLBZdV7n86wx4O0/sendMessage?chat_id=5434100705&text=${UTFtitle}%20${UTFwishes}%20${UTFprice}%20${UTFcategory}`
    );
  }
}
