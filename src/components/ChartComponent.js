import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const ChartComponent = () => {
  const userData = JSON.parse(localStorage.getItem('userData')) || [];

  const data = userData.reduce((acc, user) => {
    const date = new Date(user.Date_of_Application);
    const month = date.getMonth();
    const year = date.getFullYear();
    const key = `${year}-${month}`;
    if (!acc[key]) {
      acc[key] = 0;
    }
    acc[key]++;
    return acc;
  }, {});

  const chartData = Object.keys(data).map((key) => ({
    month: key,
    count: data[key],
  }));

  return (
    <BarChart width={500} height={300} data={chartData}>
      <CartesianGrid strokeDasharray ="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};

export default ChartComponent;