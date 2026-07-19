import Navbar from "../components/Navbar";
import coffeeBanner from "../assets/coffeeBanner.jpg";
import JobViewer from "../components/JobViewer";
import JobFilter, { type Filters } from "../components/JobFilter";
import { type JobCardItem } from "../components/JobCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<Filters>({
    sortBy: "createdAt",
    orderBy: "1",
  });

  let searchParams = new URLSearchParams(filters);
  const emptyKeys: string[] = [];
  searchParams.forEach((value, key) => {
    if (value === "") {
      emptyKeys.push(key);
    }
  });
  for (const key of emptyKeys) {
    searchParams.delete(key);
  }
  const [jobsEntries, setJobsEntries] = useState<JobCardItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
    setCurrentPage(1);
  }, [filters]);

  // Fetch jobs from MongoDB
  const fetchJobs = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/jobs?${searchParams}`,
        {
          method: "GET",
          headers: { Authorization: sessionStorage.getItem("token") || "" },
        },
      );

      const data = await response.json();
      if (response.ok) {
        // save objects into State
        setJobsEntries(data.jobsEntries);
        console.log("Fetch successful");
      } else {
        if (data.message === "jwt expired") {
          navigate("/login");
        }
        console.log(`Fetch failed: ${data.message}`);
      }
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };

  // Delete job
  const deleteJob = async (_id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/jobs/${_id}`, {
        method: "DELETE",
        headers: { Authorization: sessionStorage.getItem("token") || "" },
      });

      const data = await response.json();
      if (response.ok) {
        setJobsEntries(jobsEntries.filter((entry) => entry._id !== _id));
      }
      console.log(data.message);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };

  return (
    <>
      <Navbar />
      <img className="w-100" src={coffeeBanner} alt="Dashboard banner" />
      <section className="container d-flex">
        <div className="m-2 p-3 card w-75">
          <JobViewer
            jobsEntries={jobsEntries}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onDeleteJob={deleteJob}
          />
        </div>
        <div className="m-2 p-3 card w-25" style={{ height: "430px" }}>
          <JobFilter onApplyFilters={setFilters} />
        </div>
      </section>
    </>
  );
}

export default Dashboard;
