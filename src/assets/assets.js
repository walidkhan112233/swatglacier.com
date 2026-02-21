import logo from "./logo.png";
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg";
import close_icon from "./close_icon.svg";
import users_icon from "./users_icon.svg";
import car_icon from "./car_icon.svg";
import location_icon from "./location_icon.svg";
import fuel_icon from "./fuel_icon.svg";
import addIcon from "./addIcon.svg";
import carIcon from "./carIcon.svg";
import carIconColored from "./carIconColored.svg";
import dashboardIcon from "./dashboardIcon.svg";
import dashboardIconColored from "./dashboardIconColored.svg";
import addIconColored from "./addIconColored.svg";
import listIcon from "./listIcon.svg";
import listIconColored from "./listIconColored.svg";
import cautionIconColored from "./cautionIconColored.svg";
import arrow_icon from "./arrow_icon.svg";
import star_icon from "./star_icon.svg";
import check_icon from "./check_icon.svg";
import tick_icon from "./tick_icon.svg"; 
import delete_icon from "./delete_icon.svg";
import eye_icon from "./eye_icon.svg";
import eye_close_icon from "./eye_close_icon.svg";
import filter_icon from "./filter_icon.svg";
import edit_icon from "./edit_icon.svg";
import calendar_icon_colored from "./calendar_icon_colored.svg";
import location_icon_colored from "./location_icon_colored.svg";
import testimonial_image_1 from "./testimonial_image_1.png";
import testimonial_image_2 from "./testimonial_image_2.png";
import main_car from "./main_car.png";
import user_profile from "./user_profile.png";
import upload_icon from "./upload_icon.svg";

// coolers assests
import PureSteel_cooler from "./PureSteel_Cooler_in_200Lr.jpeg";
import Regular_100Lr_Cooler from "./Regular_100Lr_Cooler.jpeg";
import Regular_150Lr_fitted from "./Regular_150Lr_fitted.jpeg";
import Regular_150Lr_Cooler from "./Regular_150Lr.jpeg";
import Regular_250Lr_Cooler from "./Regular_250Lr_Cooler.jpeg";

//cooler banner
import main_Swat_Glacier_Banner from "./Swat_Glacier_Banner.png";

export const cityList = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Peshawar",
  "Quetta",
  "Faisalabad",
  "Multan",
  "Hyderabad",
  "Sialkot",
  "Gujranwala",
];

export const assets = {
  logo,
  gmail_logo,
  facebook_logo,
  instagram_logo,
  twitter_logo,
  menu_icon,
  search_icon,
  close_icon,
  users_icon,
  edit_icon,
  car_icon,
  location_icon,
  fuel_icon,
  addIcon,
  carIcon,
  carIconColored,
  dashboardIcon,
  dashboardIconColored,
  addIconColored,
  listIcon,
  listIconColored,
  cautionIconColored,
  calendar_icon_colored,
  location_icon_colored,
  arrow_icon,
  star_icon,
  check_icon,
  tick_icon,
  delete_icon,
  eye_icon,
  eye_close_icon,
  filter_icon,
  testimonial_image_1,
  testimonial_image_2,
  main_car,
  upload_icon,
  user_profile,

  // coolers
  PureSteel_cooler,
  Regular_100Lr_Cooler,
  Regular_150Lr_fitted,
  Regular_150Lr_Cooler,
  Regular_250Lr_Cooler,
  // cooler banner
  main_Swat_Glacier_Banner,
};

export const menuLinks = [
  { name: "Home", path: "/" },
  { name: "Coolers", path: "/coolers" },
  { name: "My Bookings", path: "/my-bookings" },
];

export const ownerMenuLinks = [
  {
    name: "Dashboard",
    path: "/owner",
    icon: dashboardIcon,
    coloredIcon: dashboardIconColored,
  },
  {
    name: "Add Cooler",
    path: "/owner/add-cooler",
    icon: addIcon,
    coloredIcon: addIconColored,
  },
  {
    name: "Manage Coolers",
    path: "/owner/manage-coolers",
    icon: carIcon,
    coloredIcon: carIconColored,
  },
  {
    name: "Manage Bookings",
    path: "/owner/manage-bookings",
    icon: listIcon,
    coloredIcon: listIconColored,
  },
];

export const dummyUserData = {
  _id: "6847f7cab3d8daecdb517095",
  name: "Swat Glacier Admin",
  email: "admin@example.com",
  role: "owner",
  image: user_profile,
};

export const dummyCoolerData = [
  {
    _id: "67ff5bc069c03d4e45f30b77",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "Swat Glacier",
    image: PureSteel_cooler,
    category: "Pure Steel",
    size: "Large",
    water_capacity: "200Lr",
    price : 145000,
    rentAdvancePayment: 65000,
    rentPerMonth: 10000,
    location: "Karachi",
    description:
      "This is 200Lr Cooler made with Pure steel From Body to Whole Structure by 'Swat Glacier Co'. It keeps water cool and fresh for longer periods. Best For Hotels and Restaurants. It Cools Water in only 40 minutes and keep it Cool For as long as upto 12 Hours",
    isAvailableForSale: true,
    isAvaliableForRent: true,
    createdAt: "2025-04-16T07:26:56.215Z",
  },
  {
    _id: "67ff6b758f1b3684286a2a65",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "Swat Glacier",
    image: Regular_100Lr_Cooler,
    category: "Regular",
    size: "Small",
    water_capacity: '100Lr',
    price: 70000,
    rentAdvancePayment: 20000,
    rentPerMonth: 3000,
    location: "Karachi",
    description:
      "This is 100Lr Regular Cooler made with High-Quality Steel Body and Sturdy Plastic Drum by 'Swat Glacier Co'. It keeps water cool and fresh for longer periods. Best For Home , Office and Mosque Use. It Cools Water in only 30 minutes and keep it Cool For as long as upto 8 Hours",
    isAvailableForSale: true,
    isAvailableForRent: true,
    createdAt: "2025-04-16T08:33:57.993Z",
  },
  {
    _id: "67ff6b9f8f1b3684286a2a68",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "Swat Glacier",
    image: Regular_150Lr_Cooler,
    category: "Regular",
    size: "Medium",
    water_capacity: '150Lr',
    price: 100000,
    rentAdvancePayment: 30000,
    rentPerMonth: 3500,
    location: "Karachi",
    description:
      "This is 150Lr Regular Cooler made with High-Quality Steel Body and Sturdy Plastic Drum by 'Swat Glacier Co'. It keeps water cool and fresh for longer periods. Best For Hotel , Restuarent , Mills and Mosque Use. It Cools Water in only 45 minutes and keep it Cool For as long as upto 10 Hours",
    isAvailableForSale: true,
    isAvaliableForRent: true,
    createdAt: "2025-04-16T08:34:39.592Z",
  },
  {
    _id: "68009c93a3f5fc6338ea7e34",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "Swat Glacier",
    image: Regular_250Lr_Cooler,
    size:"Large",
    category: "Regular",
    water_capacity: '250Lr',
    price: 110000,
    rentAdvancePayment: 30000,
    rentPerMonth: 4000,
    location: "Karachi",
    description:
      "This is 250Lr Regular Cooler made with High-Quality Steel Body and Sturdy Plastic Drum by 'Swat Glacier Co'. It keeps water cool and fresh for longer periods. Best For Large Hotels , Restuarent , Mills and Mosque Use. It Cools Water in only 45 minutes and keep it Cool For as long as upto 10 Hours",
    isAvailableForSale: true,
    isAvaliableForRent: true,
    createdAt: "2025-04-17T06:15:47.318Z",
  },
];

export const dummyMyBookingsData = [
  {
    _id: "68482bcc98eb9722b7751f70",
    cooler: dummyCoolerData[0],

    orderType: "rent",

    rentPerMonth: 10000,
    rentAdvancePayment: 65000,

    rentDate: "2025-06-14T00:00:00.000Z",

    status: "confirmed",
    createdAt: "2025-06-10T12:57:48.244Z",
  },

  {
    _id: "68482bb598eb9722b7751f60",
    cooler: dummyCoolerData[1],

    orderType: "rent",

    rentPerMonth: 3000,
    rentAdvancePayment: 20000,

    rentDate: "2025-06-12T00:00:00.000Z",

    status: "pending",
    createdAt: "2025-06-10T12:57:25.613Z",
  },
  {
    _id: "684800fa0fb481c5cfd92e56",
    cooler: dummyCoolerData[2],

    orderType: "buy",

    salePrice: 100000,

    status: "confirmed",
    createdAt: "2025-06-10T09:55:06.379Z",
  },

  {
    _id: "6847fe790fb481c5cfd92d94",
    cooler: dummyCoolerData[3],

    orderType: "buy",

    salePrice: 110000,

    status: "pending",
    createdAt: "2025-06-10T09:44:25.410Z",
  },
];


export const dummyDashboardData = {
  totalCoolers: dummyCoolerData.length,

  totalOrders: dummyMyBookingsData.length,

  pendingOrders: dummyMyBookingsData.filter(
    (order) => order.status === "pending"
  ).length,

  completedOrders: dummyMyBookingsData.filter(
    (order) => order.status === "confirmed"
  ).length,

  recentOrders: [
    dummyMyBookingsData[0],
    dummyMyBookingsData[1],
  ],

  monthlyRevenue: 23500,
};
