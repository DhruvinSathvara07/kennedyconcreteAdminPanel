import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const Home = React.lazy(() => import('./views/theme/HOME/Home'));
const HomeList = React.lazy(() => import('./views/theme/HomeList/HomeList'));
const HomeCard1 = React.lazy(() => import('./views/theme/HOME/HomeCard1'));
const HomeCard1List = React.lazy(() => import('./views/theme/HomeList/HomeCard1List'));
const HomeCard2 = React.lazy(() => import('./views/theme/HOME/HomeCard2'));
const HomeCard2List = React.lazy(() => import('./views/theme/HomeList/HomeCard2List'));
const HomeCard3 = React.lazy(() => import('./views/theme/HOME/HomeCard3'));
const HomeCard3List = React.lazy(() => import('./views/theme/HomeList/HomeCard3List'));
const HomeCard4 = React.lazy(() => import('./views/theme/HOME/HomeCard4'));
const HomeCard4List = React.lazy(() => import('./views/theme/HomeList/HomeCard4List'));

const DonateMedicine = React.lazy(() => import('./views/theme/DonateMedicine/DonateMedicine'));
const DonateMedicineList = React.lazy(() => import('./views/theme/DonateMedicineList/DonateMedicineList'));
const DonateMedicineCard1 = React.lazy(() => import('./views/theme/DonateMedicine/DonateCard1'));
const DonateMedicineCard1List = React.lazy(() => import('./views/theme/DonateMedicineList/DonateCard1List'));

const NGO = React.lazy(() => import('./views/theme/NGO/NGO'));
const NGOList = React.lazy(() => import('./views/theme/NGOList/NGOList'));
const NGOCard1 = React.lazy(() => import('./views/theme/NGO/NGOCard1'));
const NGOCard1List = React.lazy(() => import('./views/theme/NGOList/NGOCard1List'));
const NGOCard2 = React.lazy(() => import('./views/theme/NGO/NGOCard2'));
const NGOCard2List = React.lazy(() => import('./views/theme/NGOList/NGOCard2List'));
const Blog = React.lazy(() => import('./views/theme/Blog/Blog'));
const BlogList = React.lazy(() => import('./views/theme/BlogList/BlogList'));
const BlogCard = React.lazy(() => import('./views/theme/Blog/BlogCard'));
const BlogCardList = React.lazy(() => import('./views/theme/BlogList/BlogCardList'));
const About = React.lazy(() => import('./views/theme/About/About'));
const AboutList = React.lazy(() => import('./views/theme/AboutList/AboutList'));
const Mission = React.lazy(() => import('./views/theme/About/Mission'));
const MissionList = React.lazy(() => import('./views/theme/AboutList/MissionList'));
// const AboutCard = React.lazy(() => import('./views/theme/About/AboutCard'))
// const AboutCardList = React.lazy(() => import('./views/theme/AboutList/AboutCardList'))
const Contact = React.lazy(() => import('./views/theme/Contact/Contact'));
const ContactList = React.lazy(() => import('./views/theme/ContactList/ContactList'));

// edit page
const EditHomeList = React.lazy(() => import('./views/EditPages/Home/EditHomeList'));
const EditHomeCard1List = React.lazy(() => import('./views/EditPages/Home/EditHomeCard1List'));
const EditHomeCard2List = React.lazy(() => import('./views/EditPages/Home/EditHomeCard2List'));
const EditHomeCard3List = React.lazy(() => import('./views/EditPages/Home/EditHomeCard3List'));
const EditHomeCard4List = React.lazy(() => import('./views/EditPages/Home/EditHomeCard4List'));
const EditNgoList = React.lazy(() => import('./views/EditPages/Ngo/EditNgoList'));
const EditNgoCard1List = React.lazy(() => import('./views/EditPages/Ngo/EditNgoCard1List'));
const EditNgoCard2List = React.lazy(() => import('./views/EditPages/Ngo/EditNgoCard2List'));
const EditBlogList = React.lazy(() => import('./views/EditPages/Blog/EditBlogList'));
const EditBlogCardList = React.lazy(() => import('./views/EditPages/Blog/EditBlogCardList'));
const EditAboutList = React.lazy(() => import('./views/EditPages/About/EditAboutList'));
const EditMission = React.lazy(() => import('./views/EditPages/About/EditMission'));
const EditContact = React.lazy(() => import('./views/EditPages/Contact/EditContact'));

const EditDonateMedicineList = React.lazy(() => import('./views/EditPages/DonateMedicine/EditDonateMedicine'));
const EditDonateCard1List = React.lazy(() => import('./views/EditPages/DonateMedicine/EditDonateCard1'));

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

  // home
  { path: '/theme/HOME/Home', name: 'Home title', element: Home },
  { path: '/theme/HomeList/HomeList', name: 'Home tittle List', element: HomeList },
  { path: '/theme/Home/HomeCard1', name: 'HomeCard1', element: HomeCard1 },
  { path: '/theme/HomeList/HomeCard1List', name: 'HomeCard1 List', element: HomeCard1List },
  { path: '/theme/Home/HomeCard2', name: 'HomeCard2', element: HomeCard2 },
  { path: '/theme/HomeList/HomeCard2List', name: 'HomeCard2 List', element: HomeCard2List },
  { path: '/theme/Home/HomeCard3', name: 'HomeCard3', element: HomeCard3 },
  { path: '/theme/HomeList/HomeCard3List', name: 'HomeCard3 List', element: HomeCard3List },
  { path: '/theme/Home/HomeCard4', name: 'HomeCard3', element: HomeCard4 },
  { path: '/theme/HomeList/HomeCard4List', name: 'HomeCard3 List', element: HomeCard4List },

  // donatemedicine
  { path: '/theme/DonateMedicine/DonateMedicine', name: 'DonateMedicine Title', element: DonateMedicine },
  { path: '/theme/DonateMedicineList/DonateMedicineList', name: 'DonateMedicine Title list', element: DonateMedicineList },
  { path: '/theme/DonateMedicine/DonateCard1', name: 'DonateMedicine Card1', element: DonateMedicineCard1 },
  { path: '/theme/DonateMedicineList/DonateCard1List', name: 'DonateMedicine Card1 List', element: DonateMedicineCard1List },

  { path: '/theme/NGO/NGO', name: 'NGO', element: NGO },
  { path: '/theme/NGOList/NGOList', name: 'NGO List', element: NGOList },
  { path: '/theme/NGO/NGOCard1', name: 'NGO Card1', element: NGOCard1 },
  { path: '/theme/NGOList/NGOCard1List', name: 'NGO Card1 List', element: NGOCard1List },
  { path: '/theme/NGO/NGOCard2', name: 'NGO Card2', element: NGOCard2 },
  { path: '/theme/NGOList/NGOCard2List', name: 'NGO Card2 List', element: NGOCard2List },
  { path: '/theme/Blog/Blog', name: 'Blog', element: Blog },
  { path: '/theme/BlogList/BlogList', name: 'Blog List', element: BlogList },
  { path: '/theme/Blog/BlogCard', name: 'Blog Card', element: BlogCard },
  { path: '/theme/BlogList/BlogCardList', name: 'Blog Card List', element: BlogCardList },
  { path: '/theme/About/About', name: 'About', element: About },
  { path: '/theme/AboutList/AboutList', name: 'About List', element: AboutList },
  { path: '/theme/About/Mission', name: 'Mission', element: Mission },
  { path: '/theme/AboutList/MissionList', name: 'Mission List', element: MissionList },
  // { path: '/theme/About/AboutCard', name: 'About Card', element:AboutCard},
  // { path: '/theme/AboutList/AboutCardList', name: 'About Card List', element :AboutCardList },
  { path: '/theme/Contact/Contact', name: 'Contact', element: Contact },
  { path: '/theme/ContactList/ContactList', name: 'Contact List', element: ContactList },

  // editpages
  { path: '/EditPages/Home/EditHomeList/:id', name: 'Home List Edit', element: EditHomeList },
  { path: '/EditPages/Home/EditHomeCard1List/:id', name: 'Home List Edit', element: EditHomeCard1List },
  { path: '/EditPages/Home/EditHomeCard2List/:id', name: 'Home List Edit', element: EditHomeCard2List },
  { path: '/EditPages/Home/EditHomeCard3List/:id', name: 'Home List Edit', element: EditHomeCard3List },
  { path: '/EditPages/Home/EditHomeCard4List/:id', name: 'Home List Edit', element: EditHomeCard4List },

  { path: '/EditPages/Ngo/EditNgoList/:id', name: 'Ngo List Edit', element: EditNgoList },
  { path: '/EditPages/Ngo/EditNgoCard1List/:id', name: 'Ngo card1 List Edit', element: EditNgoCard1List },
  { path: '/EditPages/Ngo/EditNgoCard2List/:id', name: 'Ngo card2 List Edit', element: EditNgoCard2List },

  { path: '/EditPages/Blog/EditBlogList/:id', name: ' List Edit', element: EditBlogList },
  { path: '/EditPages/Blog/EditBlogCardList/:id', name: ' List Edit', element: EditBlogCardList },

  { path: '/EditPages/About/EditAboutList/:id', name: ' List Edit', element: EditAboutList },
  { path: '/EditPages/About/EditMission/:id', name: ' List Edit', element: EditMission },


  { path: '/EditPages/Contact/EditContact/:id', name: ' List Edit', element: EditContact },

  { path: '/EditPages/DonateMedicine/EditDonateMedicine/:id', name: ' List Edit', element: EditDonateMedicineList },
  { path: '/EditPages/DonateMedicine/EditDonateCard1/:id', name: ' List Edit', element: EditDonateCard1List },


];

export default routes;
