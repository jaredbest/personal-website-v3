import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import ProjectsView from "../components/ProjectsView";

function Projects() {
  const [projects, setPortfoios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(9);

  useEffect(() => {
    let mounted = true;
    axios.get("/api/projects").then((response) => {
      if (mounted) {
        setPortfoios(response.data);
      }
    });
    return () => (mounted = false);
  }, [projects]);

  const indexOfLastProjects = currentPage * projectsPerPage;
  const indexOfFirstProjects = indexOfLastProjects - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProjects,
    indexOfLastProjects
  );

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <Helmet>
        <title>Projects - Chester React Personal Portfolio Template</title>
        <meta
          name="description"
          content="Chester React Personal Portfolio Template Projects Page"
        />
      </Helmet>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Projects" />
          {<ProjectsView projects={currentProjects} />}
          {!(projects.length > projectsPerPage) ? null : (
            <Pagination
              className="mt-50"
              itemsPerPage={projectsPerPage}
              totalItems={projects.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
