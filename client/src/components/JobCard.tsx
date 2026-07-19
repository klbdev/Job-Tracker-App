import Accordion from "./Accordion";
import UpdateOffcanvas from "./UpdateOffcanvas";

type JobCardItem = {
  _id: string;
  role: string;
  company: string;
  type: "Full Time" | "Part Time" | "Internship" | "Contract";
  status: "Applied" | "Interviewing" | "Accepted" | "Rejected";
  notes: string;
  createdAt: string;
  updatedAt: string;
};

interface Props {
  entry: JobCardItem;
  onDeleteJob: (_id: string) => void;
}

function JobCard({ entry, onDeleteJob }: Props) {
  return (
    <>
      <div className="card mb-2" key={entry._id}>
        <h5 className="card-header">{entry?.role}</h5>
        <div className="card-body">
          <section className="d-flex align-items-center">
            <h5 className="card-title">{entry?.company}</h5>
            <small className="ms-auto">
              Created: {entry?.createdAt}
              <br />
              Updated: {entry?.updatedAt}
            </small>
          </section>
          <p className="card-text fs-5">
            Type: {entry?.type} | Current status: {entry?.status}
          </p>
          <Accordion entryId={entry._id}>{entry.notes}</Accordion>
          <UpdateOffcanvas buttonLabel="Update" currentEntry={entry} />
          <button
            className="btn btn-danger mt-2 ms-2"
            onClick={() => {
              onDeleteJob(entry._id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default JobCard;
export type { JobCardItem };
