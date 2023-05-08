import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand text-primary fw-bold">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6108/6108476.png"
            alt=""
            width="30"
            height="24"
            className="me-2"
          />
          Recipes Page
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link to="/" className="nav-link text-primary">
              Home
            </Link>
            <Link to="/about" className="nav-link text-primary">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
