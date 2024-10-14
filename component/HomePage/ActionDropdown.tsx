// component/HomePage/ActionDropdown.tsx
import React from 'react';
import { Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';
import './HomePage.css'; // Import the CSS file

interface ActionDropdownProps {
  onSelect: (eventKey: string | null) => void;
  selectedAction: string | null;
}

const ActionDropdown: React.FC<ActionDropdownProps> = ({ onSelect, selectedAction }) => {
  const getTitle = () => {
    switch (selectedAction) {
      case '/view':
        return 'View';
      case '/add':
        return 'Add';
      case '/delete':
        return 'Delete';
      default:
        return 'Action';
    }
  };

  return (
    <InputGroup className="custom-dropdown">
      <DropdownButton
        variant="outline-secondary"
        title={getTitle()}
        id="actionDropdown"
        onSelect={onSelect}
        drop="end" // Set the dropdown to open to the right
      >
        <Dropdown.Item eventKey="/view">View</Dropdown.Item>
        <Dropdown.Item eventKey="/add">Add</Dropdown.Item>
        <Dropdown.Item eventKey="/delete">Delete</Dropdown.Item>
      </DropdownButton>
    </InputGroup>
  );
};

export default ActionDropdown;