import React from 'react';
import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center py-20">
      <img className="w-56 mb-4" src="/images/error-404.png" alt="404" />
      <h1 className="text-center text-3xl font-bold mb-4">Page Not Found</h1>
      <Button onClick={() => navigate('/')}>
        <p className="text-white">Go to Home</p>
      </Button>
    </div>
  );
};

export default NotFound;
