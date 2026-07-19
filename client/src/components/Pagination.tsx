interface Props {
  pagesRequired: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Pagination({ pagesRequired, currentPage, onPageChange }: Props) {
  const pageList = [];
  for (let i = 0; i < pagesRequired; i++) {
    const displayedPage = i + 1;
    const isActive = currentPage === displayedPage ? "active" : "";
    pageList.push(
      <li key={displayedPage} className={`page-item ${isActive}`}>
        <a
          className="page-link"
          href="#"
          onClick={() => {
            onPageChange(displayedPage);
          }}
        >
          {displayedPage}
        </a>
      </li>,
    );
  }
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            className="page-link"
            href="#"
            onClick={() => {
              if (currentPage > 1) {
                onPageChange(currentPage - 1);
              }
            }}
          >
            &lt;
          </a>
        </li>
        {pageList}
        <li
          className={`page-item ${currentPage === pagesRequired ? "disabled" : ""}`}
        >
          <a
            className="page-link"
            href="#"
            onClick={() => {
              if (currentPage < pagesRequired) {
                onPageChange(currentPage + 1);
              }
            }}
          >
            &gt;
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
