// component/HomePage/DatePickerField.tsx
import React from 'react';
import { InputGroup, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './HomePage.css'; // Import the CSS file

interface DatePickerFieldProps {
  label: string;
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  id: string;
  disabled?: boolean; // Add the disabled prop
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({ label, selectedDate, onChange, id, disabled }) => {
  return (
    <Col md={6}>
      <label htmlFor={id} className="form-label">{label}:</label>
      <InputGroup>
        <InputGroup.Text id={`${id}-addon`}>📅</InputGroup.Text>
        <DatePicker
          id={id}
          selected={selectedDate}
          onChange={onChange}
          className="form-control"
          aria-describedby={`${id}-addon`}
          disabled={disabled} // Use the disabled prop
        />
      </InputGroup>
    </Col>
  );
};

export default DatePickerField;