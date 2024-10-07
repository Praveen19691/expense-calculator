// component/RegisterPage/SuccessMessage.tsx
import React from 'react';

interface SuccessMessageProps {
  message: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message }) => {
  return (
    <div className="alert alert-success mt-3" role="alert">
      {message}
    </div>
  );
};

export default SuccessMessage;