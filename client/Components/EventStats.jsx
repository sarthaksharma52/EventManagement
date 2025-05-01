// import React from 'react';
// import { BsCalendar2Event, BsPeople, BsClock } from 'react-icons/bs';
// import { Link } from 'react-router-dom'; // Assuming you're using React Router

// const stats = [
//   {
//     label: 'Total Events',
//     value: 6,
//     icon: <BsCalendar2Event size={24} className="text-primary" />,
//     bg: 'bg-primary-subtle',
//     link: '/events',
//   },
//   {
//     label: 'Registered Events',
//     value: 3,
//     icon: <BsPeople size={24} className="text-success" />,
//     bg: 'bg-success-subtle',
//     link: '/registered',
//   },
//   {
//     label: 'Upcoming Events',
//     value: 5,
//     icon: <BsClock size={24} className="text-warning" />,
//     bg: 'bg-warning-subtle',
//     link: '/upcoming',
//   },
// ];

// const EventStats = () => {
//   return (
//     <div className="container py-4">
//       {/* Heading */}
//       <div className="mb-4">
//         <h3 className="fw-bold">Dashboard</h3>
//         <p className="text-muted">Welcome back! Here's what's happening with your events.</p>
//       </div>

//       {/* Stat cards */}
//       <div className="row g-4">
//         {stats.map((stat, index) => (
//           <div key={index} className="col-md-4 col-sm-6 col-12">
//             <Link
//               to={stat.link}
//               className="text-decoration-none"
//               style={{ color: 'inherit' }}
//             >
//               <div className="card shadow-sm p-3 rounded-4 h-100">
//                 <div className="d-flex align-items-center gap-3">
//                   <div className={`p-3 rounded-3 ${stat.bg}`}>
//                     {stat.icon}
//                   </div>
//                   <div>
//                     <p className="mb-1 text-secondary fw-medium">{stat.label}</p>
//                     <h5 className="mb-0 fw-semibold">{stat.value}</h5>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventStats;

import React from 'react';
import { BsCalendar2Event, BsPeople, BsClock } from 'react-icons/bs';

const stats = [
  {
    label: 'Total Events',
    value: 6,
    icon: <BsCalendar2Event size={24} className="text-primary" />,
    bg: 'bg-primary-subtle',
  },
  {
    label: 'Registered Events',
    value: 3,
    icon: <BsPeople size={24} className="text-success" />,
    bg: 'bg-success-subtle',
  },
  {
    label: 'Upcoming Events',
    value: 5,
    icon: <BsClock size={24} className="text-warning" />,
    bg: 'bg-warning-subtle',
  },
];

const EventStats = () => {
  return (
    <div className="container py-4">
      {/* Heading */}
      <div className="mb-4">
        <h3 className="fw-bold">Dashboard</h3>
        <p className="text-muted">Welcome back! Here's what's happening with your events.</p>
      </div>

      {/* Stat cards */}
      <div className="d-flex gap-4 flex-wrap">
        {stats.map((stat, index) => (
          <div key={index} className="card shadow-sm p-3 rounded-4" style={{ width: '16rem' }}>
            <div className="d-flex align-items-center gap-3">
              <div className={`p-3 rounded-3 ${stat.bg}`}>
                {stat.icon}
              </div>
              <div>
                <p className="mb-1 text-secondary fw-medium">{stat.label}</p>
                <h5 className="mb-0 fw-semibold">{stat.value}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventStats;
