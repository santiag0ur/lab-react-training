import React from 'react';
import './Dice1sec.css';
import dice0 from '../imgsrc/dice-empty.png';
import dice1 from '../imgsrc/dice1.png';
import dice2 from '../imgsrc/dice2.png';
import dice3 from '../imgsrc/dice3.png';
import dice4 from '../imgsrc/dice4.png';
import dice5 from '../imgsrc/dice5.png';
import dice6 from '../imgsrc/dice6.png';

class Dice1sec extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: 1,
      empty: false,
    };
  }

  getEmpty = () => {
    console.log('getEmpty');

    setTimeout(() => {
      this.getRandom();
    }, 1000);

    this.setState(() => {
      return { clicked: 1, empty: true };
    });
  };

  getRandom = () => {
    let x = Math.floor(Math.random() * 6 + 1);
    console.log('x');
    console.log(x);

    this.setState(() => {
      return { clicked: x, empty: false };
    });
  };

  render() {
    const { clicked } = this.state;
    const { empty } = this.state;
    //    const { img, imgClicked } = this.props;
    return (
      <img
        className="diceImg"
        src={
          empty === true
            ? dice0
            : clicked === 1
            ? dice1
            : clicked === 2
            ? dice2
            : clicked === 3
            ? dice3
            : clicked === 4
            ? dice4
            : clicked === 5
            ? dice5
            : dice6
        }
        alt="dicenumbert"
        onClick={this.getEmpty}
      />
    );
  }
}

export default Dice1sec;
