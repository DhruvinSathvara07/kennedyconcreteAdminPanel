import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const Home = React.lazy(() => import('./views/theme/Home/Home'));

// ServicePage
const ConcreteDeliveryAreas = React.lazy(() => import('./views/Pages/Service/ConcreteDeliveryAreas/ConcreteDeliveryAreas'));
const ConcreteDeliveryAreasList = React.lazy(() => import('./views/Pages/Service/ConcreteDeliveryAreas/ConcreteDeliveryList'));
const ConcreteDeliveryAreasEdit = React.lazy(() => import('./views/Pages/Service/ConcreteDeliveryAreas/ConcreteDeliveryEdit'));

const Sidewalk = React.lazy(() => import('./views/Pages/Service/ConcreteProjects/Sidewalk/Sidewalk'));
const SidewalkList = React.lazy(() => import('./views/Pages/Service/ConcreteProjects/Sidewalk/SidewalkList'));
const SidewalkEdit = React.lazy(() => import('./views/Pages/Service/ConcreteProjects/Sidewalk/SidewalkEdit'));

const Driveway = React.lazy(() => import('./views/Pages/Service/ConcreteProjects/Driveway/Driveway'));
const DrivewayList = React.lazy(() => import('./views/Pages/Service/ConcreteProjects/Driveway/DrivewayList'));
const DrivewayEdit = React.lazy(() => import('./views/Pages/Service/ConcreteProjects/Driveway/DrivewayEdit'));

const Slab = React.lazy(() => import('./views/Pages/Service/ConcreteProjects/Slab/Slab'));
const SlabList = React.lazy(() => import('./views/Pages/Service/ConcreteProjects/Slab/SlabList'));
const SlabEdit = React.lazy(() => import('./views/Pages/Service/ConcreteProjects/Slab/SlabEdit'));

const Cellfill = React.lazy(() => import('./views/Pages/Service/ConcreteProjects/Cellfill/Cellfill'));
const CellfillList = React.lazy(() => import('./views/Pages/Service/ConcreteProjects/Cellfill/CellfillList'));
const CellfillEdit = React.lazy(() => import('./views/Pages/Service/ConcreteProjects/Cellfill/CellfillEdit'));

const Commercial = React.lazy(() => import('./views/Pages/Service/ConcreteProjects/Commercial/Commercial'));
const CommercialList = React.lazy(() => import('./views/Pages/Service/ConcreteProjects/Commercial/CommercialList'));
const CommercialEdit = React.lazy(() => import('./views/Pages/Service/ConcreteProjects/Commercial/CommercialEdit'));

const Shotcreate = React.lazy(() => import('./views/Pages/Service/ConcreteProjects/Shotcreate/Shotcreate'));
const ShotcreateList = React.lazy(() => import('./views/Pages/Service/ConcreteProjects/Shotcreate/ShotcreateList'));
const ShotcreteEdit = React.lazy(() => import('./views/Pages/Service/ConcreteProjects/Shotcreate/ShotcreateEdit'));

const DecorativeConcrete = React.lazy(() => import('./views/Pages/Service/ConcreteProjects/DecorativeConcrete/DecorativeConcrete'));
const DecorativeConcreteList = React.lazy(() => import('./views/Pages/Service/ConcreteProjects/DecorativeConcrete/DecorativeConcreteList'));
const DecorativeConcreteEdit = React.lazy(() => import('./views/Pages/Service/ConcreteProjects/DecorativeConcrete/DecorativeConcreteEdit'));

const Buildingmaterial = React.lazy(() => import('./views/Pages/Service/BuildingMatarials/BuildingMatarials'));
const BuildingmaterialList = React.lazy(() => import('./views/Pages/Service/BuildingMatarials/BuildingMatarialsEdit'));
const BuildingmaterialEdit = React.lazy(() => import('./views/Pages/Service/BuildingMatarials/BuildingMatarialsEdit'));

const PreferredContractor = React.lazy(() => import('./views/Pages/Service/PreferredContractor/PreferredContractor'));
const PreferredContractorList = React.lazy(() => import('./views/Pages/Service/PreferredContractor/PreferredContractorList'));
const PreferredContractorEdit = React.lazy(() => import('./views/Pages/Service/PreferredContractor/PreferredContractorEdit'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Home, exact: true },

  // service
  { path: "/theme/concrete/page", name: "Concrete Page", element: ConcreteDeliveryAreas },
  { path: "/theme/concrete/list", name: "Concrete Page List", element: ConcreteDeliveryAreasList },
  { path: "/theme/concrete/list/:id", name: "Concrete Page Edit", element: ConcreteDeliveryAreasEdit },

  { path: "/theme/sidewalk/page", name: "Sidewalk Page", element: Sidewalk },
  { path: "/theme/sidewalk/list", name: "Sidewalk Page List", element: SidewalkList },
  { path: "/theme/sidewalk/list/:id", name: "Sidewalk Page Edit", element: SidewalkEdit },

  { path: "/theme/driveway/page", name: "Driveway Page", element: Driveway },
  { path: "/theme/driveway/list", name: "Driveway Page List", element: DrivewayList },
  { path: "/theme/driveway/list/:id", name: "Driveway Page Edit", element: DrivewayEdit },

  { path: "/theme/slab/page", name: "Slab Page", element: Slab },
  { path: "/theme/slab/list", name: "Slab Page List", element: SlabList },
  { path: "/theme/slab/list/:id", name: "Slab Page Edit", element: SlabEdit },

  { path: "/theme/cellfill/page", name: "Cell Fill Page", element: Cellfill },
  { path: "/theme/cellfill/list", name: "Cell Fill Page List", element: CellfillList },
  { path: "/theme/cellfill/list/:id", name: "Cell Fill Page Edit", element: CellfillEdit },

  { path: "/theme/commercial/page", name: "Commercial Page", element: Commercial },
  { path: "/theme/commercial/list", name: "Commercial Page List", element: CommercialList },
  { path: "/theme/commercial/list/:id", name: "Commercial Page Edit", element: CommercialEdit },

  { path: "/theme/shotcrete/page", name: "Shotcrete Page", element: Shotcreate },
  { path: "/theme/shotcrete/list", name: "Shotcrete Page List", element: ShotcreateList },
  { path: "/theme/shotcrete/list/:id", name: "Shotcrete Page Edit", element: ShotcreteEdit },

  { path: "/theme/decorative/page", name: "Decorative Concrete Page", element: DecorativeConcrete },
  { path: "/theme/decorative/list", name: "Decorative Concrete Page List", element: DecorativeConcreteList },
  { path: "/theme/decorative/list/:id", name: "Decorative Concrete Page Edit", element: DecorativeConcreteEdit },

  { path: "/theme/materials/page", name: "Building Material Page", element: Buildingmaterial },
  { path: "/theme/materials/list", name: "Building Material Page List", element: BuildingmaterialList },
  { path: "/theme/materials/list/:id", name: "Building Material Page Edit", element: BuildingmaterialEdit },

  { path: "/theme/contractors/page", name: "Preferred Contractor Page", element: PreferredContractor },
  { path: "/theme/contractors/list", name: "Preferred Contractor Page List", element: PreferredContractorList },
  { path: "/theme/contractors/list/:id", name: "Preferred Contractor Page Edit", element: PreferredContractorEdit },


];

export default routes;
