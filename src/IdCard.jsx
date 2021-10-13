import './IdCard.css';

const IdCard = (props) => {
  console.log(props);
  return (
    <div className="CardId">
      <div>
        <img src={props.picture} alt="user portrait" />
      </div>
      <div></div>
      <div className="Blocktext">
        <p>
          <strong>First name: </strong>
          {props.firstName}
        </p>
        <p>
          <strong>Last Name: </strong>
          {props.lastName}
        </p>
        <p>
          <strong>Gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong>Height: </strong>
          {props.height}
        </p>
        <p>
          <strong>Birth: </strong>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
