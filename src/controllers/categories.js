import {
  getAllCategories,
  getAllprojectsforCategories,
  getCategoryById,
} from "../models/categories.js";
export const categoriesPage = async (req, res) => {
  const categories = await getAllCategories();
  const title = "Service Project Categories";
  console.log(categories);
  res.render("categories", { title, categories });
};

export const showCategoryDetailsPage = async (req, res) => {
  const title = "Category Details";
  const categoryId = req.params.id;
  const categoryDetails = await getCategoryById(categoryId);
  console.log("showCategoryDetailsPage categoryDetails:", categoryDetails);
  const projectsForCategory = await getAllprojectsforCategories(categoryId);
  console.log(
    "showCategoryDetailsPage projectsForCategory:",
    projectsForCategory,
  );
  res.render("category", { title, categoryDetails, projectsForCategory });
};
