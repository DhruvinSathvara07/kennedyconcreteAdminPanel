import
  {
    cilBook,
    cilContact,
    cilFile,
    cilLan,
    cilListNumbered,
    cilPencil,
    cilPeople
  } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CNavItem, CNavTitle, CNavGroup } from '@coreui/react';
import React from 'react';

const _nav = [
  {
    component: CNavTitle,
    name: 'home page'
  },
  // {
  //   component: CNavItem,
  //   name: 'Home title',
  //   to: '/theme/HOME/Home',
  //   icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Home Title List',
  //   to: '/theme/HomeList/HomeList',
  //   icon: <CIcon icon={cilListNumbered} customClassName="nav-icon" />,
  // },

  // Dropdown Section
  {
    component: CNavGroup,
    name: 'Home Page',
    icon: <CIcon icon={ cilPeople } customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Users',
        to: '/users/list',
      },
      {
        component: CNavItem,
        name: 'All Users',
        to: '/users/list',
      },
      {
        component: CNavItem,
        name: 'Add User',
        to: '/users/add',
      },
      {
        component: CNavItem,
        name: 'User Profile',
        to: '/users/profile',
      },
      // Sub-dropdown
      {
        component: CNavGroup,
        name: 'Silder',
        items: [
          {
            component: CNavItem,
            name: 'Slider Text/Image',
            to: '/users/settings/profile',
          },
          {
            component: CNavItem,
            name: 'Slider List',
            to: '/users/settings/account',
          },
        ]
      }
    ]
  },

  // // Another section
  // {
  //   component: CNavTitle,
  //   name: 'Content Management'
  // },
  // {
  //   component: CNavItem,
  //   name: 'Pages',
  //   to: '/content/pages',
  //   icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Contacts',
  //   to: '/content/contacts',
  //   icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  // }
];

export default _nav;