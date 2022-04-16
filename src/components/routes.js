
import { Navigate,Outlet } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
const routes = (isLoggedIn) => [
//   {
//     path: '/',
//     element: isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />,
//     children: [
//       { path: '/dashboard', element: <Dashboard /> },
//       { path: '/account', element: <Account /> },
//       { path: '/', element: <Navigate to="/app/dashboard" /> },
//       {
//         path: 'member',
//         element: <Outlet />,
//         children: [
//           { path: '/', element: <MemberGrid /> },
//           { path: '/add', element: <AddMember /> },
//         ],
//       },
//     ],
//   },
  {
    path: '/',
    element: !isLoggedIn ? <Home /> : <Navigate to="/" />,
    children: [
      { path: '/login', element: <Login /> },
    //   { path: '/', element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;