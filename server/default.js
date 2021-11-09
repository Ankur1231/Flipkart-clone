import { products } from "./constants/Products.js";
import Product from "./model/ProductSchema.js";

const DefaultData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data imported successfully");
  } catch (error) {
    console.log(error);
  }
};

export default DefaultData;
