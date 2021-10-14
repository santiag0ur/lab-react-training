import './DriverCard.css';
import Rating from './Rating';

const DriverCard = (props) => {
  return (
    <div className="DriverCard">
      <div className="ContainerPicture">
        <img className="PortraitDriver" src={props.img} alt="portrait" />
      </div>
      <div className="BlocktextCardDriver">
        <div>{props.name}</div>
        <div className="Rating">
          <Rating rating={props.rating} />
        </div>
        <div className="Car">
          <span>{props.car.model}</span> &nbsp;-&nbsp;{' '}
          <span>{props.car.licensePlate}</span>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
