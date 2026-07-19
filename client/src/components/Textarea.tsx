interface Props {
    label: string;
    name: string;
    placeholder: string;
    rows?: number;
    required?: boolean;
    defaultValue?: string;
}

function Textarea({ label, name, placeholder, rows, required, defaultValue }: Props) {
  return (
    <>
      <div className="input-group">
        <span className="input-group-text">{label}</span>
        <textarea
          className="form-control"
          name={name}
          placeholder={placeholder}
          rows={rows}
          required={required}
          defaultValue={defaultValue}
        ></textarea>
      </div>
    </>
  );
}

export default Textarea;
