import "./card.css";

const Cards = (props) => {
  return (
    <div className="container1">
      <div>
        <img src={props.image} alt="imges" />
      </div>
      <div>
        <div className="headname">
          <h2>{props.head}</h2>
        </div>
        <div className="titlename">
          <h3>{props.title}</h3>
        </div>
        <div className="subtitlename">
          <p>{props.subtitle}</p>
        </div>
        <div>
          <button className="detail">Details</button>
        </div>
      </div>
    </div>
  );
};
export default Cards;
