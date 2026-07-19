interface Props {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  defaultValue?: string;
}

function TextInput({ label, name, placeholder, required, defaultValue }: Props) {
  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text">{label}</span>
        <input
          type="text"
          className="form-control"
          name={name}
          placeholder={placeholder}
          required={required}
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
}

export default TextInput;