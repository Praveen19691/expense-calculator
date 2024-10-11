// component/AddPage/AddPageInputField.tsx
import React from 'react';
import { Form, InputGroup, Col } from 'react-bootstrap';

interface AddPageInputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const AddPageInputField: React.FC<AddPageInputFieldProps> = ({ label, name, value, onChange, disabled }) => {
  return (
    <Form.Group as={Col} md="12" className="mb-3">
      <InputGroup>
        <InputGroup.Text>{label}</InputGroup.Text>
        <Form.Control
          type="number"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={`Enter ${label.toLowerCase()}`}
          required
          disabled={disabled}
        />
      </InputGroup>
    </Form.Group>
  );
};

export default AddPageInputField;