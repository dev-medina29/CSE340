import {
  getAllProjects,
  getUpcomingProjects,
  getProjectDetails,
} from "../models/projects.js";

const NUMBER_OF_UPCOMING_PROJECTS = 5;
export const projectsPage = async (req, res) => {
  const projects = await getUpcomingProjects(NUMBER_OF_UPCOMING_PROJECTS);
  const title = "Upcoming Service Projects";
  console.log("projectsPage projects:", projects);
  res.render("projects", { title, projects });
};

export const showProjectDetailsPage = async (req, res) => {
  const title = "Project Details";
  const projectId = req.params.id;
  const projectDetails = await getProjectDetails(projectId);
  console.log("showProjectDetailsPage projectDetails:", projectDetails);
  res.render("project", { title, projectDetails });
};
