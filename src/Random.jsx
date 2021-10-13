import './Random.css';

const RandomValue = (props) => {
  let minval = props.min;
  let maxval = props.max;
  console.log(minval);
  console.log(maxval);
  let y = maxval - minval;
  let r = Math.random();
  console.log(r);
  console.log(y);
  let x = Math.round(y * r);
  console.log(y * r);
  console.log(x);
  console.log(x + 1);
  return (
    <div className="Randomtext">
      <p>
        Random value between {props.min} and {props.max} ={'> '}
        {x + 1}
      </p>
    </div>
  );
};

export default RandomValue;
