import React from 'react';
import
{
  cilFile,
  cilPencil,
  cilPeople
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CNavItem, CNavTitle, CNavGroup } from '@coreui/react';

const _nav = [
  {
    component: CNavTitle,
    name: 'Service page'
  },
  {
    component: CNavGroup,
    name: 'Service Page',
    icon: <CIcon icon={ cilPeople } customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: 'Concrete Delivery Page',
        icon: <CIcon icon={ cilFile } customClassName="nav-icon" />,
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
        icon: <CIcon icon={ cilFile } customClassName="nav-icon" />,
        items: [
          {
            component: CNavGroup,
            name: 'Sidewalk',
            icon: <CIcon icon={ cilPencil } customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Sidewalk Page',
                to: '/projects/sidewalk/page'
              },
              {
                component: CNavItem,
                name: 'Sidewalk Page List',
                to: '/projects/sidewalk/list'
              }
            ]
          },
          {
            component: CNavGroup,
            name: 'Driveway',
            icon: <CIcon icon={ cilPencil } customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Driveway Page',
                to: '/projects/driveway/page'
              },
              {
                component: CNavItem,
                name: 'Driveway Page List',
                to: '/projects/driveway/list'
              }
            ]
          },
          {
            component: CNavGroup,
            name: 'Slab',
            icon: <CIcon icon={ cilPencil } customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Slab Page',
                to: '/projects/slab/page'
              },
              {
                component: CNavItem,
                name: 'Slab Page List',
                to: '/projects/slab/list'
              }
            ]
          },
          {
            component: CNavGroup,
            name: 'Cell Fill',
            icon: <CIcon icon={ cilPencil } customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Cell Fill Page',
                to: '/projects/cellfill/page'
              },
              {
                component: CNavItem,
                name: 'Cell Fill Page List',
                to: '/projects/cellfill/list'
              }
            ]
          },
          {
            component: CNavGroup,
            name: 'Commercial',
            icon: <CIcon icon={ cilPencil } customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Commercial Page',
                to: '/projects/commercial/page'
              },
              {
                component: CNavItem,
                name: 'Commercial Page List',
                to: '/projects/commercial/list'
              }
            ]
          },
          {
            component: CNavGroup,
            name: 'Shotcrete',
            icon: <CIcon icon={ cilPencil } customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Shotcrete Page',
                to: '/projects/shotcrete/page'
              },
              {
                component: CNavItem,
                name: 'Shotcrete Page List',
                to: '/projects/shotcrete/list'
              }
            ]
          },
          {
            component: CNavGroup,
            name: 'Decorative Concrete',
            icon: <CIcon icon={ cilPencil } customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Decorative Concrete Page',
                to: '/projects/decorative/page'
              },
              {
                component: CNavItem,
                name: 'Decorative Concrete List',
                to: '/projects/decorative/list'
              }
            ]
          }
        ]
      },
      {
        component: CNavGroup,
        name: 'Building Materials',
        icon: <CIcon icon={ cilFile } customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Building Materials Page',
            to: '/materials/page'
          },
          {
            component: CNavItem,
            name: 'Building Materials List',
            to: '/materials/list'
          }
        ]
      },
      {
        component: CNavGroup,
        name: 'Preferred Contractors',
        icon: <CIcon icon={ cilFile } customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Preferred Contractors Page',
            to: '/contractors/page'
          },
          {
            component: CNavItem,
            name: 'Preferred Contractors List',
            to: '/contractors/list'
          }
        ]
      }
    ]
  }
];

export default _nav;