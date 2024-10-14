// component/AddPage/AddPage.tsx
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import './AddPage.css'; // Import the CSS file
import AddPageInputField from './AddPageInputField';

const AddPage: React.FC = () => {
  const [formData, setFormData] = useState({
    groceries: '',
    vegetables: '',
    fruits: '',
    food: '',
    houseHoldItems: '',
    travel: '',
    total: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const total = Object.keys(formData)
      .filter((key) => key !== 'total')
      .reduce((sum, key) => sum + (parseFloat(formData[key as keyof typeof formData]) || 0), 0);
    setFormData((prevData) => ({ ...prevData, total: total.toString() }));
  }, [formData.groceries, formData.vegetables, formData.fruits, formData.food, formData.houseHoldItems, formData.travel]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="add-page d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 add-page-card">
        <h1 className="text-center mb-4">Add Page</h1>
        <Form onSubmit={handleSubmit}>
          {['groceries', 'vegetables', 'fruits', 'food', 'houseHoldItems', 'travel'].map((field, index) => (
            <AddPageInputField
              key={index}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              name={field}
              value={(formData as any)[field]}
              onChange={handleChange}
            />
          ))}
          <AddPageInputField
            label="Total"
            name="total"
            value={formData.total}
            onChange={handleChange}
            disabled
          />
          <div className="d-flex justify-content-center">
            <Button type="submit" className="btn btn-primary">Submit</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddPage;