import JobInsertCard from "../components/JobInsertCard";
import Navbar from "../components/Navbar";


function New() {
  return (
    <>
      <Navbar />
      <section className="container">
        <div className="m-2 p-3 card">
          <JobInsertCard />
        </div>
      </section>

    </>
  );
}

export default New;
