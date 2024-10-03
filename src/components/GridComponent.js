import React, { useState, useEffect } from 'react';

const GridComponent = () => {
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  const filteredData = userData.filter((user) => {
    return user.Applicant_Name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search by Applicant ID" />
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

export default GridComponent;