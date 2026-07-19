interface Props {
  entryId: string;
  children: React.ReactNode;
}

function Accordion({ entryId, children }: Props) {
  return (
    <>
      <div className="accordion" id="accordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#accordion-${entryId}`}
              aria-expanded="false"
              aria-controls={`accordion-${entryId}`}
            >
              View Notes
            </button>
          </h2>
          <div id={`accordion-${entryId}`} className="accordion-collapse collapse">
            <pre className="accordion-body" style={{fontFamily: "inherit"}}>
              {children}
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordion;
