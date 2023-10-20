import { CON_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "yellow",
  };

  
const ResturantCard = (props) => {
    // console.log(props);
    const {resData} = props;
    const {name,cuisines, sla, avgRating, cloudinaryImageId} = resData?.info;
    return (
      <div className="res-card" style={styleCard}>
        <h3>Meghana Foods</h3>
        <img
          className="res-logo"
          alt="res-logo"
          src={CON_URL + cloudinaryImageId}
  
        ></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    );
  };
export default ResturantCard;  