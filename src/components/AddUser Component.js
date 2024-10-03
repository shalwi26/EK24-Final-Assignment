import React, { useState } from 'react';

const AddUserComponent = () => {
  const [newUser , setNewUser ] = useState({
    ID: '',
    Applicant_Name: '',
    Gender: '',
    District: '',
    State: '',
    Pincode: '',
    Ownership: '',
    GovtID_Type: '',
    ID_Number: '',
    Category: '',
    Load_Applied: '',
    Date_of_Application: '',
    Status: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser ((prevUser ) => ({ ...prevUser , [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('userData')) || [];
    userData.push(newUser);
    localStorage.setItem('userData', JSON.stringify(userData));
    setNewUser ({
      ID: '',
      Applicant_Name: '',
      Gender: '',
      District: '',
      State: '',
      Pincode: '',
      Ownership: '',
      GovtID_Type: '',
      ID_Number: '',
      Category: '',
      Load_Applied: '',
      Date_of_Application: '',
      Status: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" name="ID" value={newUser .ID} onChange={handleInputChange} />
      </label>
      <label>
        Applicant Name:
        <input type="text" name="Applicant_Name" value={newUser .Applicant_Name} onChange={handleInputChange} />
      </label>
      <label>
        Gender:
        <input type="text" name="Gender" value={newUser .Gender} onChange={handleInputChange} />
      </label>
      <label>
        District:
        <input type="text" name="District" value={newUser .District} onChange={handleInputChange} />
      </label>
      <label>
        State:
        <input type="text" name="State" value={newUser .State} onChange={handleInputChange} />
      </label>
      <label>
        Pincode:
        <input type="text" name="Pincode" value={newUser .Pincode} onChange={handleInputChange} />
      </label>
      <label>
        Ownership:
        <input type="text" name="Ownership" value={newUser .Ownership} onChange={handleInputChange} />
      </label>
      <label>
        Govt ID Type:
        <input type="text" name="GovtID_Type" value={newUser .GovtID_Type} onChange={handleInputChange} />
      </label>
      <label>
        ID Number:
        <input type="text" name="ID_Number" value={newUser .ID_Number} onChange={handleInputChange} />
      </label>
      <label>
        Category:
        <input type="text" name="Category" value={newUser .Category} onChange={handleInputChange} />
      </label>
      <label>
        Load Applied:
        <input type="text" name="Load_Applied" value={newUser .Load_Applied} onChange={handleInputChange} />
      </label>
      <label>
        Date of Application:
        <input type="text" name="Date_of_Application" value={newUser .Date_of_Application} onChange={handleInputChange} />
      </label>
      <label>
        Status:
        <input type="text" name="Status" value={newUser .Status} onChange={handleInputChange} />
      </label>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserComponent;