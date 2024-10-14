// component/HomePage/DatePickerSection.tsx
import React from 'react';
import { Row } from 'react-bootstrap';
import DatePickerField from './DatePickerField';

interface DatePickerSectionProps {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
  isAddAction: boolean;
  isViewAction: boolean;
  isDeleteAction: boolean;
}

const DatePickerSection: React.FC<DatePickerSectionProps> = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  isAddAction,
  isViewAction,
  isDeleteAction,
}) => {
  return (
    <Row className="mb-3">
      <DatePickerField
        label="From"
        selectedDate={startDate}
        onChange={setStartDate}
        id="fromDate"
        disabled={!isAddAction && !isViewAction && !isDeleteAction} // Enable for Add, View, and Delete
      />
      <DatePickerField
        label="To"
        selectedDate={endDate}
        onChange={setEndDate}
        id="toDate"
        disabled={!isViewAction} // Enable only for View
      />
    </Row>
  );
};

export default DatePickerSection;