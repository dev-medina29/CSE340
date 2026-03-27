import { getAllCategories } from "../models/categories.js";
export const categoriesPage = async (req, res) => {
  const categories = await getAllCategories();
  const title = "Service Project Categories";
  // console.log(categories);
  res.render("categories", { title, categories });
};
