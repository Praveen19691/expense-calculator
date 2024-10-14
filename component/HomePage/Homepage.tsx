// component/HomePage/Homepage.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'; // Import the CSS file
import ActionDropdown from './ActionDropdown';
import DatePickerSection from './DatePickerSection';

const HomePage: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSelect = (eventKey: string | null) => {
    setSelectedAction(eventKey);
  };

  const handleSubmit = () => {
    if (selectedAction) {
      navigate(selectedAction);
    }
  };

  useEffect(() => {
    if (selectedAction === '/add') {
      setStartDate(new Date()); // Set current date as default value
      setEndDate(null); // Clear end date
    } else if (selectedAction === '/view') {
      setStartDate(null); // Clear start date
      setEndDate(null); // Clear end date
    } else if (selectedAction === '/delete') {
      setStartDate(new Date()); // Set current date as default value
      setEndDate(null); // Clear end date
    } else {
      setStartDate(null); // Clear start date
      setEndDate(null); // Clear end date
    }
  }, [selectedAction]);

  const isAddAction = selectedAction === '/add';
  const isViewAction = selectedAction === '/view';
  const isDeleteAction = selectedAction === '/delete';

  return (
    <div className="home-page d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 home-page-card">
        <div className="d-flex justify-content-center mb-3">
          <ActionDropdown onSelect={handleSelect} selectedAction={selectedAction} />
        </div>
        <DatePickerSection
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          isAddAction={isAddAction}
          isViewAction={isViewAction}
          isDeleteAction={isDeleteAction}
        />
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" onClick={handleSubmit} disabled={!selectedAction}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;