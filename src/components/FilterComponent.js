import React, { useState } from 'react';

const FilterComponent = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) || []);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const filteredData = userData.filter((user) => {
    const date = new Date(user.Date_of_Application);
    return date >= new Date(startDate) && date <= new Date(endDate);
  });

  return (
    <div>
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={handleStartDateChange} />
      </label>
      <label>
        End Date:
        <input type="date" value={endDate} onChange={handleEndDateChange} />
      </label>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Applicant Name</th>
            <th>Gender</th>
            <th>District</th>
            <th>State</th>
            <th>Pincode</th>
            <th>Ownership</th>
            <th>Govt ID Type</th>
            <th>ID Number</th>
            <th>Category</th>
            <th>Load Applied</th>
            <th>Date of Application</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user) => (
            <tr key={user.ID}>
              <td>{user.ID}</td>
              <td>{user.Applicant_Name}</td>
              <td>{user.Gender}</td>
              <td>{user.District}</td>
              <td>{user.State}</td>
              <td>{user.Pincode}</td>
              <td>{user.Ownership}</td>
              <td>{user.GovtID_Type}</td>
              <td>{user.ID_Number}</td>
              <td>{user.Category}</td>
              <td>{user.Load_Applied}</td>
              <td>{user.Date_of_Application}</td>
              <td>{user.Status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilterComponent;