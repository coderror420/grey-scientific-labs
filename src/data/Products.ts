import resList from "./ProductList";
import type { Product } from "../types/Product.types";


export const products: Product[] = resList.map((item) => {
  const info = item.info;

  return {
    id: info.id,
    name: info.name,
    price: Number(info.costForTwo.replace(/[^\d]/g, "")) || 0,
    category: info.cuisines?.[0] ?? "General",
    stock: Math.floor(Math.random() * 50) + 1,
    description: `${info.cuisines?.join(", ")} • ${info.areaName}`,
    cloudinaryImageId:`${info.cloudinaryImageId}`
  };
});
