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

export const getUpcomingProjects = async (number_of_projects) => {
  const query = `
    SELECT project_id, title, ServiceProjects.Description, location, date,
           organization_id, organization.name AS organization_name
    FROM ServiceProjects
    JOIN organization USING (organization_id)
    WHERE date >= $1
    ORDER BY date ASC
    LIMIT $2;
  `;
  const result = await db.query(query, [new Date(), number_of_projects]);
  console.log("getUpcomingProjects result.rows:", result.rows);
  return result.rows;
};

export const getProjectDetails = async (id) => {
  const query = `
  select project_id,title,ServiceProjects.description,location,date,organization_id,organization.name as organization_name
  from ServiceProjects
  join organization using (organization_id)
  where project_id = ${id}
  `;
  const result = await db.query(query);
  return result.rows;
};
