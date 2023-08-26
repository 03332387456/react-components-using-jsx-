import React from 'react';

interface Option {
  value: string;
  displayName: string;
}

interface SelectProps {
  options: Option[];
  label: string;
  getValue: (value: string) => void;
}

export default function Select(props: SelectProps) {
  const { options, label, getValue } = props;

  const selectChange = (val: string)=> {
    getValue(val);
  };

  return (
    <>
      <p>{label}</p>
      <select onChange={(e) => selectChange(e.target.value)}>
        {options &&
          Array.isArray(options) &&
          options.map((x, i) => (
            <option key={i} value={x.value}>
              {x.displayName}
            </option>
          ))}
      </select>
    </>
  );
}


