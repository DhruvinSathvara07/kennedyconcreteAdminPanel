import React from 'react';
import {
  cilContact,
  cilFile,
  cilPencil,
  cilPeople
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CNavItem, CNavTitle, CNavGroup } from '@coreui/react';

const _nav = [
  {
    component: CNavTitle,
    name: 'Home Page'
  },
  {
    component: CNavItem,
    name: 'Home',
    to: '/theme/home',
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Service page'
  },
  {
    component: CNavGroup,
    name: 'Service Page',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: 'Concrete Delivery Page',
        icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Concrete Page',
            to: '/theme/concrete/page'
          },
          {
            component: CNavItem,
            name: 'Concrete Page List',
            to: '/theme/concrete/list'
          }
        ]
      },
      {
        component: CNavGroup,
        name: 'Concrete Projects',
        icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
        items: [
          {
            component: CNavGroup,
            name: 'Sidewalk',
            icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Sidewalk Page',
                to: '/theme/sidewalk/page'
              },
              {
                component: CNavItem,
                name: 'Sidewalk Page List',
                to: '/theme/sidewalk/list'
              }
            ]
          },
          {
            component: CNavGroup,
            name: 'Driveway',
            icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Driveway Page',
                to: '/theme/driveway/page'
              },
              {
                component: CNavItem,
                name: 'Driveway Page List',
                to: '/theme/driveway/list'
              }
            ]
          },
          {
            component: CNavGroup,
            name: 'Slab',
            icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Slab Page',
                to: '/theme/slab/page'
              },
              {
                component: CNavItem,
                name: 'Slab Page List',
                to: '/theme/slab/list'
              }
            ]
          },
          {
            component: CNavGroup,
            name: 'Cell Fill',
            icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Cell Fill Page',
                to: '/theme/cellfill/page'
              },
              {
                component: CNavItem,
                name: 'Cell Fill Page List',
                to: '/theme/cellfill/list'
              }
            ]
          },
          {
            component: CNavGroup,
            name: 'Commercial',
            icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Commercial Page',
                to: '/theme/commercial/page'
              },
              {
                component: CNavItem,
                name: 'Commercial Page List',
                to: '/theme/commercial/list'
              }
            ]
          },
          {
            component: CNavGroup,
            name: 'Shotcrete',
            icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Shotcrete Page',
                to: '/theme/shotcrete/page'
              },
              {
                component: CNavItem,
                name: 'Shotcrete Page List',
                to: '/theme/shotcrete/list'
              }
            ]
          },
          {
            component: CNavGroup,
            name: 'Decorative Concrete',
            icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Decorative Concrete Page',
                to: '/theme/decorative/page'
              },
              {
                component: CNavItem,
                name: 'Decorative Concrete List',
                to: '/theme/decorative/list'
              }
            ]
          }
        ]
      },
      {
        component: CNavGroup,
        name: 'Building Materials',
        icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Building Materials Page',
            to: '/theme/materials/page'
          },
          {
            component: CNavItem,
            name: 'Building Materials List',
            to: '/theme/materials/list'
          }
        ]
      },
      {
        component: CNavGroup,
        name: 'Preferred Contractors',
        icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Preferred Contractors Page',
            to: '/theme/contractors/page'
          },
          {
            component: CNavItem,
            name: 'Preferred Contractors List',
            to: '/theme/contractors/list'
          }
        ]
      }
    ]
  },
  {
    component: CNavTitle,
    name: 'Contacts Page',
  },
  {
    component: CNavGroup,
    name: 'Contacts Page',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Contacts Page',
        to: '/theme/contacts/page'
      },
      {
        component: CNavItem,
        name: 'Contacts Page List',
        to: '/theme/contacts/list'
      }
    ]
  }
];

export default _nav;