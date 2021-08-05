import { Helmet } from "react-helmet";
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function Notfound() {
  return (
    <Layout>
      <Helmet>
        <title>404 - Jared Best | Creative Technologist</title>
        <meta
          name="description"
          content="Not Found Page of Jared Best | Creative Technologist"
        />
      </Helmet>
      <div className="mi-about-area mi-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="notfound">
                <div className="notfound-inner text-center">
                  <h1>404</h1>
                  <h3>Whoops!!! Page not found!</h3>
                  <Link to="/" className="mi-button">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Notfound;
