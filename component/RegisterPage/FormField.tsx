// component/RegisterPage/FormField.tsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addon: string;
}

const FormField: React.FC<FormFieldProps> = ({ id, label, type, value, onChange, addon }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}:</label>
      <div className="input-group">
        <span className="input-group-text" id={`${id}-addon`}>{addon}</span>
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          id={id}
          className="form-control"
          value={value}
          onChange={onChange}
          required
          aria-describedby={`${id}-addon`}
        />
        {type === 'password' && (
          <span className="input-group-text" onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
        )}
      </div>
    </div>
  );
};

export default FormField;