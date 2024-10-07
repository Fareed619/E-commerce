import "./offer.css";
import ButtonComponent from "../Button/ButtonComponent";

const Offer = ({ img }) => {
  return (
    <div className="offer-container">
      <div>
        <h1
          style={{
            fontSize: "50px",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          <em>flat 50% off</em>
        </h1>
        <h4 style={{ fontSize: "30px", letterSpacing: "1px" }}>
          <em>12</em> Hours <em>20</em> Mins
        </h4>
        <ButtonComponent text="explore now" />
      </div>
      <img className="img-offer" src={img} />
    </div>
  );
};

export default Offer;
