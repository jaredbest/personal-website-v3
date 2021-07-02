import { Helmet } from "react-helmet";
import Disqus from "disqus-react";
import React, { useEffect, useState } from "react";
import MarkDown from "markdown-to-jsx";
import Layout from "../components/Layout";

function BlogDetails(props) {
  const [content, setContent] = useState("");
  const blogId = props.match.params.id;
  const blogFile = props.match.params.title;

  useEffect(() => {
    import(`../blog/${blogFile}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setContent(res));
      })
      .catch((err) => console.log(err));
  }, [blogFile]);

  const disqusShortname = "jared_best"; // Found on your Disqus.com dashboard.
  const disqusConfig = {
    url: "https://www.jaredbest.com/", // Homepage link of this site.
    identifier: blogId,
    title: blogFile,
  };

  return (
    <Layout>
      <Helmet>
        <title>Blog Details - Chester React Personal Portfolio Template</title>
        <meta
          name="description"
          content="Chester React Personal Portfolio Template Blog Details Page"
        />
      </Helmet>
      <div className="mi-blog-details mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <MarkDown>{content}</MarkDown>
          <div className="mi-blog-details-comments mt-30">
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogDetails;
