import React from 'react';

const InstitutionDashboard = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-3xl mb-6">Institution Dashboard</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl">Manage Student Data</h3>
        {/* Form to edit student count, resources */}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl">Teacher Applications</h3>
        {/* Display teacher applications with accept option */}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl">Contact Info</h3>
        {/* Display institution contact details */}
      </div>
    </div>
  );
};

export default InstitutionDashboard;
