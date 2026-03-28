import db from "./db.js";
export const getAllCategories = async () => {
  const query = `
        SELECT category_id, name
        FROM public.categories;
    `;
  const result = await db.query(query);
  return result.rows;
};

export const getCategoryById = async (id) => {
  const query = `
        SELECT category_id, name
        FROM public.categories
        WHERE category_id = $1;
    `;
  const result = await db.query(query, [id]);
  return result.rows[0];
};

export const getAllcategoriesforProjects = async (project_id) => {
  const query = `
        select name, category_id from categories 
        join project_categories using(category_id)
        join ServiceProjects using(project_id)
        where project_id=$1;
  `;
  const result = await db.query(query, [project_id]);
  return result.rows;
};

export const getAllprojectsforCategories = async (category_id) => {
  const query = `
      select title, project_id from ServiceProjects
      join project_categories using(project_id)
      join categories using(category_id)
      where category_id=$1;`;
  const result = await db.query(query, [category_id]);
  return result.rows;
};
