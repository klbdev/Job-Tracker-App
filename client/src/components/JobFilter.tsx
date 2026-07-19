type Filters = {
  sortBy: "createdAt" | "updatedAt";
  orderBy: "1" | "-1";
  employmentType?: "Full Time" | "Part Time" | "Internship" | "Contract";
  status?: "Applied" | "Interviewing" | "Accepted" | "Rejected";
};

interface Props {
  onApplyFilters: (filters: Filters) => void;
}

function JobFilter({ onApplyFilters }: Props) {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Receive filter and send to state setter
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries()) as Filters;
    onApplyFilters(formValues);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset className="mb-3">
          <legend>Sort by</legend>
          <select name="sortBy" className="form-select">
            <option value="createdAt">Date Created</option>
            <option value="updatedAt">Date Updated</option>
          </select>
        </fieldset>

        <fieldset className="mb-3">
          <legend>Order</legend>
          <div className="form-check">
            <label className="form-check-label" htmlFor="oldestToNewest">
              <input
                className="form-check-input"
                type="radio"
                name="orderBy"
                id="oldestToNewest"
                value="1"
                defaultChecked
              />
              Oldest to Newest
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="newestToOldest">
              <input
                className="form-check-input"
                type="radio"
                name="orderBy"
                id="newestToOldest"
                value="-1"
              />
              Newest to Oldest
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Filters</legend>
          <select name="employmentType" className="form-select mb-2">
            <option value="">All Employment Types</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Internship">Internship</option>
            <option value="Contract">Contract</option>
          </select>
          <select name="status" className="form-select mb-2">
            <option value="">All Statuses</option>
            <option value="Applied">Applied</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </select>
        </fieldset>

        <button className="btn btn-secondary">Apply</button>
      </form>
    </>
  );
}

export default JobFilter;
export type { Filters };
