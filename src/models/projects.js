import db from "./db.js";
export const getAllProjects = async () => {
  const query = `
        SELECT project_id,organization_id, name,Title, ServiceProjects.Description, Location, Date
        FROM public.ServiceProjects
        join public.organization using (organization_id);
    `;
  const result = await db.query(query);
  return result.rows;
};
