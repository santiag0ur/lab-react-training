import './Numberstable.css';

const Numberstable = (props) => {
  let columns = [];
  let rows = [];
  let even = false;
  let numberlimit = props.number;

  for (let i = 1; i < numberlimit; i++) {
    if (i % 2) {
      console.log('odd');
      even = false;
    } else {
      console.log('even');
      even = true;
    }
    columns.push(
      <div className={even ? 'even' : 'odd'} key={Math.random()}>
        {i}
      </div>
    );
    if (columns.length === 5) {
      rows.push(<div key={Math.random()}>{columns}</div>);
      columns = [];
    }

    if (i + 1 === numberlimit) {
      rows.push(<div key={Math.random()}>{columns}</div>);
    }
  }

  return <tbody className="theTable">{rows}</tbody>;
};

export default Numberstable;
