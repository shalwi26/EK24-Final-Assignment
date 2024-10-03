import React from 'react';
import GridComponent from './components/GridComponent';
import AddUserComponent from './components/AddUser Component';
import FilterComponent from './components/FilterComponent';
import ChartComponent from './components/ChartComponent';

const App = () => {
  return (
    <div>
      <GridComponent />
      <AddUserComponent />
      <FilterComponent />
      <ChartComponent />
    </div>
  );
};

export default App;