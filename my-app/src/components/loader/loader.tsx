import "./loader.css";

export const Loader = () => {
  return (
    <div className="loader flex_center">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
