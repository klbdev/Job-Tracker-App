import JobCard from "./JobCard";
import Pagination from "../components/Pagination";
import { type JobCardItem } from "./JobCard";

interface Props {
  jobsEntries: JobCardItem[];
  currentPage: number;
  onPageChange: (page: number) => void;
  onDeleteJob: (_id: string) => void;
}

function JobViewer({ jobsEntries, currentPage, onPageChange, onDeleteJob }: Props) {
  const totalEntries = jobsEntries.length;
  const entriesPerPage = 5;
  
  // Render jobCards based on current page
  const jobCardList = [];
  const currentPageEntries = jobsEntries.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage,
  );
  for (const entry of currentPageEntries) {
    jobCardList.push(<JobCard entry={entry} onDeleteJob={onDeleteJob} />);
  }
  
  return (
    <>
      <h2>My Jobs</h2>
      <div className="mb-auto">{jobsEntries.length} results</div>
      {jobCardList}
      <Pagination
        pagesRequired={Math.ceil(totalEntries / entriesPerPage) || 1}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  );
}

export default JobViewer;
