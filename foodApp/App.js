import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/burger-logo-design-template-8f3596992e540bb9078f91f59f745ce2_screen.jpg?ts=1653317642"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "yellow",
};

const ResturantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <h3>Meghana Foods</h3>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"
      ></img>
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4 stars</h4>
      <h4>38min</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body" style={{ backgroundColor: "blue" }}>
      <div className="search">Search</div>
      <div className="res-container">
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
