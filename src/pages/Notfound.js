import { Helmet } from "react-helmet";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";

function Notfound() {
  return (
    <Layout>
      <Helmet>
        <title>404 Not Found | Jared Best</title>
        <meta
          name="description"
          content="404 Not Found | Jared Best"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </Layout>
  );
}

export default Notfound;
