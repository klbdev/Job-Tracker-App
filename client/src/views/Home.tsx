import BuildingBackground from "../components/BuildingBackground";
import { Link } from "react-router-dom";
import HomeCard from "../components/HomeCard";

function Home() {
  return (
    <BuildingBackground>
      <HomeCard maxWidth="400px">
        <div className="text-center">
          <h1 className="card-title">Job Tracker</h1>
          <p className="card-text">Manage your job applications in one place</p>
          <div className="d-flex justify-content-around">
            <Link to="/register" className="btn btn-primary btn-lg">
              Create an account
            </Link>
            <Link to="/login" className="btn btn-secondary btn-lg">
              Login
            </Link>
          </div>
        </div>
      </HomeCard>
    </BuildingBackground>
  );
}

export default Home;
