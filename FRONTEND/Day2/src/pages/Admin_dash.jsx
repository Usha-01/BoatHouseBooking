
// import React from 'react';
// import { PieChart } from '@mui/x-charts';
// import '../assets/css/Admindash.css'
// import AdminDashboard from '../components/AdminDashboard';

// const Admin_dash = () => {
//   const series = [
//     {
//       data: [
//         { id: 0, value: 10, label: 'Luxury boat' },
//         { id: 1, value: 15, label: 'Premium boat' },
//         { id: 2, value: 20, label: 'Wooden boat' },
//       ],
//     },
//   ];

//   return (
//     <div className="chart-container">
//         <AdminDashboard/>
//       <PieChart
//         series={series}
//         width={400}
//         height={200}
//       />
//     </div>
//   );
// };

// export default Admin_dash;

import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import AdminDashboard from '../components/AdminDashboard';
import '../assets/css/Admindash.css'

const Admin_dash = () => {
  const series = [
        {
           data: [
             { id: 0, value: 10, label: 'Luxury boat' },
             { id: 1, value: 15, label: 'Premium boat' },
             { id: 2, value: 20, label: 'Wooden boat' },
           ],
         },
       ];
  return (
    <div className='status' >
      <AdminDashboard />
      <div className='scale'>
      <h2>Booked boat status </h2>
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['Wooden boat', 'Primary boat', 'Luxury boat'] }]}
        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
        width={700}
        height={400}
      />
     </div>
      
    </div>

  );
};

export default Admin_dash;
