import logo from "../assets/vite.svg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  } 
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark ps-2 pe-2"
      >
        <a className="navbar-brand" href="/dashboard">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Job Tracker
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/dashboard">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/new">
                New
              </a>
            </li>
          </ul>
          <span className="navbar-text ms-auto">
            {sessionStorage.getItem("email")}
            <button className="btn btn-outline-danger ms-2" onClick={logout}>Logout</button>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
