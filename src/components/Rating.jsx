import './Rating.css';
//import starFull from '../imgsrc/star-solid.svg';
//import starEmpty from '../imgsrc/star-regular.svg';

// <div className="test3">&#9733;</div>
// <div className="test3">&#9734;</div>

const Rating = (props) => {
  let valueToReturn = '';
  const valueNumber = Math.round(props.rating);

  const starFull = <span>&#9733;</span>;
  const starEmpty = <span>&#9734;</span>;

  if (valueNumber < 0) {
    valueToReturn = 0;
  }
  if (valueNumber > 5) {
    valueToReturn = 5;
  } else {
    valueToReturn = valueNumber;
  }

  return (
    <div>
      <span className="starClass">
        {valueToReturn > 0 ? starFull : starEmpty}
      </span>
      <span>{valueToReturn > 1 ? starFull : starEmpty}</span>
      <span>{valueToReturn > 2 ? starFull : starEmpty}</span>
      <span>{valueToReturn > 3 ? starFull : starEmpty}</span>
      <span>{valueToReturn > 4 ? starFull : starEmpty}</span>
    </div>
  );
};

export default Rating;
