import React from 'react'

const Dashboard = React.lazy(() => import('./components/pages/dashboard/Dashboard'))
const Employees = React.lazy(() => import('./components/pages/Employees/Employees'))
const Chat = React.lazy(() => import('./components/pages/Chat/Chat'))
const Calendar = React.lazy(() => import('./components/pages/Calendar/Calender'))
const NewUser = React.lazy(() => import('./components/pages/Employees/NewUser'))
const Leave = React.lazy(() => import('./components/pages/Leave/Leave'))
const Event = React.lazy(() => import('./components/pages/Evenement/Events'))
const NewEvent = React.lazy(() => import('./components/pages/Evenement/NewEvent'))














const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/employees', name: 'Employees', component: Employees, exact: true },
  { path: '/chat', name: 'Chat', component: Chat },
  { path: '/calendar', name: 'Calendar', component: Calendar },
  { path: '/employees/newUser', name: 'New User', component: NewUser },
  { path: '/leave', name: 'Leave', component: Leave },
  { path: '/event', name: 'Events', component: Event, exact: true },
  { path: '/event/newEvent', name: 'New event', component: NewEvent }










]

export default routes
