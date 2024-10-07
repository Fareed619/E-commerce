import "./breadcrum.css";
import { MdArrowForwardIos } from "react-icons/md";

const Breadcrum = ({ category, name }) => {
  return (
    <div className="breadcrum">
      HOME <MdArrowForwardIos /> SHOP <MdArrowForwardIos /> {category}{" "}
      <MdArrowForwardIos /> {name}
    </div>
  );
};

export default Breadcrum;
