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

export const getProjectsByOrganizationId = async (organizationId) => {
  const query = `
        SELECT
          project_id,
          organization_id,
          title,
          description,
          location,
          date
        FROM ServiceProjects
        WHERE organization_id = $1
        ORDER BY date;
      `;

  const query_params = [organizationId];
  const result = await db.query(query, query_params);

  return result.rows;
};
