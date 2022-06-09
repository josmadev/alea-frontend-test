import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPageStyles.css";

const NotFoundPage = () => {
  return (
    <div className="notFoundPageContainer">
      <h1 className="title404">notFound</h1>
      <section>
        <h2 className="subtitle404">
          The page you are looking for does not exist.
        </h2>
      </section>
      <section className="contentImg">
        <img
          src="images/undraw_Page_not_found_re_e9o6.png"
          width="40%"
          alt="404-img"
        />
        <p>404 · Page not found</p>
        <Link className="buttonBack" to="/users">
          Return
        </Link>
      </section>
    </div>
  );
};

export default NotFoundPage;
