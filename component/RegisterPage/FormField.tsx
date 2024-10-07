// component/RegisterPage/FormField.tsx
import React from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addon: string;
}

const FormField: React.FC<FormFieldProps> = ({ id, label, type, value, onChange, addon }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}:</label>
      <div className="input-group">
        <span className="input-group-text" id={`${id}-addon`}>{addon}</span>
        <input
          type={type}
          id={id}
          className="form-control"
          value={value}
          onChange={onChange}
          required
          aria-describedby={`${id}-addon`}
        />
      </div>
    </div>
  );
};

export default FormField;