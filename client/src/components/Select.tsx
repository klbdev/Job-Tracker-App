interface Props {
  label: string;
  name: string;
  options: string[];
  defaultValue: string;
  maxWidth?: string;
}

function Select({ label, name, options, defaultValue, maxWidth}: Props) {
  return (
    <div className="input-group mb-3" style={{maxWidth: `${maxWidth}px`}}>
      <label className="input-group-text" htmlFor="form-select">
        {label}
      </label>
      <select className="form-select" name={name} id="form-select" defaultValue={defaultValue} required>
        {options.map((option) => {
            return (
                <option value={option}>{option}</option>
            )
        })}
      </select>
    </div>
  );
}

export default Select;