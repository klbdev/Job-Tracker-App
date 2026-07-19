import TextInput from "./TextInput";
import Textarea from "./Textarea";
import Select from "./Select";
import { type JobCardItem } from "./JobCard";

interface Props {
  buttonLabel: string;
  currentEntry: JobCardItem;
}

function UpdateOffcanvas({ buttonLabel, currentEntry }: Props) {
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedData = new FormData(e.currentTarget);
    const updatedValues = Object.fromEntries(updatedData.entries());

    try {
      const response = await fetch(`http://localhost:3000/api/jobs/${currentEntry._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("token") || "",
        },
        body: JSON.stringify(updatedValues),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
        window.location.reload();
      } else {
        console.log(data.message);
      }
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };
  return (
    <>
      <button
        className="btn btn-primary mt-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target={`#offcanvas-${currentEntry._id}`}
        aria-controls={`offcanvas-${currentEntry._id}`}
      >
        {buttonLabel}
      </button>

      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex={-1}
        id={`offcanvas-${currentEntry._id}`}
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h4 className="offcanvas-title" id="offcanvasExampleLabel">
            Update job card
          </h4>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <form onSubmit={handleSubmit}>
            <TextInput
              label="👤"
              name="role"
              placeholder="Role"
              required={true}
              defaultValue={currentEntry.role}
            />
            <TextInput
              label="🏛️"
              name="company"
              placeholder="Company"
              required={true}
              defaultValue={currentEntry.company}
            />
            <Select
              label="🏷️"
              name="type"
              options={["Full Time", "Part Time", "Internship", "Contract"]}
              defaultValue={currentEntry.type}
              maxWidth="250"
            />
            <Select
              label="⏳"
              name="status"
              options={["Applied", "Interviewing", "Accepted", "Rejected"]}
              defaultValue={currentEntry.status}
              maxWidth="250"
            />
            <Textarea
              label="📓"
              name="notes"
              placeholder="Add a note..."
              rows={8}
              defaultValue={currentEntry.notes}
            />
            <button className="btn btn-success mt-2">Confirm</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateOffcanvas;
