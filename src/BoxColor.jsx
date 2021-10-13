import './Boxcolor.css';

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

const BoxColor = (props) => {
  let r = props.r;
  let g = props.g;
  let b = props.b;
  console.log(r);
  console.log(g);
  console.log(b);
  const testcolor = `rgb(${r},${g},${b})`;
  console.log(testcolor);
  const divStyle = {
    backgroundColor: testcolor,
  };
  const colorHex =
    '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);

  return (
    <div style={divStyle} className="ColoredBox">
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
      <p>{colorHex}</p>
    </div>
  );
};

export default BoxColor;
