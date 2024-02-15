import { Link, useParams } from "react-router-dom";

export const Filters = () => {
  const { filter: activeFilter = "all" } = useParams();

  return (
    <div className="filters-btns">
      <Link
        to="/all"
        style={{ color: activeFilter === "all" ? "red" : "white" }}
        className="filter-btn"
      >
        all
      </Link>
      <Link
        to="/active"
        style={{ color: activeFilter === "active" ? "red" : "white" }}
        className="filter-btn"
      >
        active
      </Link>
      <Link
        to="/done"
        style={{ color: activeFilter === "done" ? "red" : "white" }}
        className="filter-btn"
      >
        done
      </Link>
    </div>
  );
};
