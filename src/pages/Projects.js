import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import ProjectView from "../components/ProjectView";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";

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
  }, []);

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
        <title>Projects | Jared Best</title>
        <meta
          name="description"
          content="Projects | Jared Best"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Projects" />
            {<ProjectView projects={currentProjects} />}
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
      </Suspense>
    </Layout>
  );
}

export default Projects;
