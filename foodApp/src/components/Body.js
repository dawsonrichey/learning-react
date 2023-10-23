import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";



const Body = () => {
// Local State Variable * Super powerful variable
const [listOfRestaurants] = useState([   
   {
  info: {
    id: "334475",
    name: "KFC",
    cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    costForTwo: 40000,
    deliveryTime: 36,
    avgRating: "3.8",
    sla: {
      deliveryTime: 19,
      lastMileTravel: 0.1,
      serviceability: "SERVICEABLE",
      slaString: "19 mins",
      lastMileTravelString: "0.1 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    },
  }
    
]);
// let listOfRestaurants = null;
// Normal JS Variable
//   let listOfRestaurants = [
//     {
//     info: {
//       id: "334475",
//       name: "KFC",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       costForTwo: 40000,
//       deliveryTime: 36,
//       avgRating: "3.8",
//       sla: {
//         deliveryTime: 19,
//         lastMileTravel: 0.1,
//         serviceability: "SERVICEABLE",
//         slaString: "19 mins",
//         lastMileTravelString: "0.1 km",
//         iconType: "ICON_TYPE_EMPTY",
//       }
//       },
      
//   },
//   {
//     info: {
//       id: "334275",
//       name: "Domino",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       costForTwo: 40000,
//       deliveryTime: 36,
//       avgRating: "8",
//       sla: {
//         deliveryTime: 19,
//         lastMileTravel: 0.1,
//         serviceability: "SERVICEABLE",
//         slaString: "19 mins",
//         lastMileTravelString: "0.1 km",
//         iconType: "ICON_TYPE_EMPTY",
//       }
//       },
      
//   },
//   {
//     info: {
//       id: "3342775",
//       name: "Dom",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       costForTwo: 40000,
//       deliveryTime: 36,
//       avgRating: "8",
//       sla: {
//         deliveryTime: 19,
//         lastMileTravel: 0.1,
//         serviceability: "SERVICEABLE",
//         slaString: "19 mins",
//         lastMileTravelString: "0.1 km",
//         iconType: "ICON_TYPE_EMPTY",
//       }
//       },
      
//   },

// ];
  let listOfRestaurantsJS = [
    {
    info: {
      id: "334475",
      name: "KFC",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: "3.8",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.1,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "0.1 km",
        iconType: "ICON_TYPE_EMPTY",
      }
      },
      
  },
  {
    info: {
      id: "334275",
      name: "Domino",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: "8",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.1,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "0.1 km",
        iconType: "ICON_TYPE_EMPTY",
      }
      },
      
  },
  {
    info: {
      id: "3342775",
      name: "Dom",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: "8",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.1,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "0.1 km",
        iconType: "ICON_TYPE_EMPTY",
      }
      },
      
  },

];
  return (
    <div className="body" style={{ backgroundColor: "blue" }}>
      <div className="filter">
      <button className="filter-btn" 
      onClick={() => {
        // Filter Logic here
        listOfRestaurants = listOfRestaurants.filter(
        (res) => res.info.avgRating > 4);
        console.log(listOfRestaurants);
      }}>Top Rated Restaurants button</button>
        </div>
      <div className="res-container">
        {listOfRestaurants.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
