import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BlogView from "../components/BlogView";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    let mounted = true;
    axios.get("/api/blog").then((response) => {
      if (mounted) {
        setPosts(response.data);
      }
    });
    return () => (mounted = false);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <Helmet>
        <title>Blog | Jared Best</title>
        <meta
          name="description"
          content="Blog | Jared Best"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Blog" />
            <BlogView blogs={currentPosts} />
            {!(posts.length > postsPerPage) ? null : (
              <Pagination
                className="mt-50"
                itemsPerPage={postsPerPage}
                totalItems={posts.length}
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

export default Blog;
