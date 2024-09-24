import React from "react";
import { Link } from "react-router-dom";
import { Image } from "./common/Image";

function Blog(props) {
  const { id, featuredImage, title, createDay, createMonth, filesource } =
    props.data;
  const getShortMonth = (month) => {
    return month.slice(0, 3);
  };
  const getNospaceTitle = (filesource) => {
    let tempArr = filesource.split("/");
    let fileName = tempArr[tempArr.length - 1];
    let getName = fileName.slice(0, -3);
    return getName;
  };
  return (
    <div className="mi-blog">
      <div className="mi-blog-image">
        <Image
          src={featuredImage}
          loader="/images/blog-image-placeholder.png"
          alt={title}
        />
        <div className="mi-blog-date">
          <span className="date">{createDay}</span>
          <span className="month">{getShortMonth(createMonth)}</span>
        </div>
      </div>
      <div className="mi-blog-content">
        <h5>
          <Link to={`${id}/${getNospaceTitle(filesource)}`}>{title}</Link>
        </h5>
      </div>
    </div>
  );
}

export default Blog;
