import React from 'react'
import CIcon from '@coreui/icons-react'
import {

  cilCalendar,
  cilPeople,
  cilFolder,
  cilSpeech,
  cilSettings,
  cilTransfer,
  cilSpeedometer,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Company',
  },
  {
    component: CNavItem,
    name: 'Time Off',
    to: '/leave',
    icon: <CIcon icon={cilTransfer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Employees',
    to: '/employees',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Events',
    to: '/event',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
  }, {
    component: CNavItem,
    name: 'Calendar',
    to: '/calendar',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Messages',
    to: '/chat',
    icon: <CIcon icon={cilSpeech} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'File',
    to: '/',
    icon: <CIcon icon={cilFolder} customClassName="nav-icon" />,
  },

  {
    component: CNavTitle,
    name: 'Setting',
  },
  {
    component: CNavItem,
    name: 'Setting',
    to: '/',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },

]

export default _nav
