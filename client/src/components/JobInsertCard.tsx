import TextInput from "./TextInput";
import Select from "./Select";
import Textarea from "./Textarea";
import Alert, { type AlertTypes } from "../components/Alert";
import { useState } from "react";

function JobInsertCard() {
  const [alert, setAlert] = useState<AlertTypes>(null);
  const [alertMessage, setAlertMessage] = useState("");
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const formValues = Object.fromEntries(formData.entries());
    try {
      const response = await fetch("http://localhost:3000/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("token") || "",
        },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();
      if (response.ok) {
        setAlert("success");
        setAlertMessage(data.message);
        formElement.reset();
      } else {
        setAlert("danger");
        setAlertMessage(data.message);
      }
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };
  return (
    <>
      {alert && (
        <Alert type={alert} onClose={() => setAlert(null)}>
          {alertMessage}
        </Alert>
      )}
      <h2>Add a new job</h2>
      <form onSubmit={handleSubmit}>
        <div className="card mb-2">
          <h5 className="card-header">
            <TextInput
              label="👤"
              name="role"
              placeholder="Role"
              required={true}
            />
          </h5>

          <div className="card-body">
            <TextInput
              label="🏛️"
              name="company"
              placeholder="Company"
              required={true}
            />

            <div className="d-flex w-50 justify-content-between">
              <Select
                label="🏷️"
                name="type"
                options={["Full Time", "Part Time", "Internship", "Contract"]}
                defaultValue="Full Time"
                maxWidth="250"
              />
              <Select
                label="⏳"
                name="status"
                options={["Applied", "Interviewing", "Accepted", "Rejected"]}
                defaultValue="Applied"
                maxWidth="250"
              />
            </div>
            <Textarea
              label="📓"
              name="notes"
              placeholder="Add a note..."
              rows={5}
            />
          </div>
        </div>
        <button className="btn btn-primary">Add</button>
      </form>
    </>
  );
}

export default JobInsertCard;
