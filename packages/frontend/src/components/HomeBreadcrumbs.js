import { Link } from "react-router-dom";

const HomeBreadcrumbs = () => {
  return (
    <>
      <ul className="breadcrumb">
        <li>
          <Link to="/">🐾Home</Link>
        </li>
      </ul>
    </>
  );
};

export default HomeBreadcrumbs;
