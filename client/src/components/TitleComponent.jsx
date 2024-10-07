/* eslint-disable react/prop-types */
const TitleComponent = ({title}) => {
  return (
    <div>
      <div style={{ width: "100%" }}>
        <h1 className="text-title">{title}</h1>
        <hr style={{ width: "150px", border: "2px solid" }} />
      </div>
    </div>
  );
};

export default TitleComponent;
