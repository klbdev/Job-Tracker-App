type AlertTypes = "success" | "warning" | "danger" | "info" | null;

const icons = {
  "success": "✓",
  "warning": "⚠︎",
  "danger": "⚠︎",
  "info": "ⓘ"
}

interface Props {
  children?: React.ReactNode;
  type: AlertTypes;
  onClose: () => void;
}

function Alert({ children, type, onClose }: Props) {
  return (
    <>
      <div
        className={`alert alert-${type} alert-dismissible fade show`}
        role="alert"
      >
        {`${icons[type ?? "warning"]} ${children}`}
        <button
          type="button"
          className="btn-close"
          onClick={onClose}
          aria-label="Close"
        ></button>
      </div>
    </>
  );
}

export default Alert;
export { type AlertTypes };
