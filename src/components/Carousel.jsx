import React from 'react';
import './Carousel.css';

import rightarrow from '../imgsrc/rightarrow.png';
import leftarrow from '../imgsrc/leftarrow.png';

const face1 = 'https://randomuser.me/api/portraits/women/1.jpg';
const face2 = 'https://randomuser.me/api/portraits/men/1.jpg';
const face3 = 'https://randomuser.me/api/portraits/women/2.jpg';
const face4 = 'https://randomuser.me/api/portraits/men/2.jpg';

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: 1,
      right: false,
      left: false,
    };
  }

  getLeft = () => {
    if (this.state.clicked === 1) {
      this.setState(() => {
        return { clicked: 4 };
      });
    } else {
      this.setState(() => {
        return { clicked: this.state.clicked - 1 };
      });
    }
  };
  getRight = () => {
    if (this.state.clicked === 4) {
      this.setState(() => {
        return { clicked: 1 };
      });
    } else {
      this.setState(() => {
        return { clicked: this.state.clicked + 1 };
      });
    }
  };

  render() {
    const { clicked } = this.state;
    //    const { img, imgClicked } = this.props;
    return (
      <div>
        <button onClick={this.getLeft}>
          <img src={leftarrow} alt="letftbutton" />
        </button>
        <img
          className="diceImg"
          src={
            clicked === 1
              ? face1
              : clicked === 2
              ? face2
              : clicked === 3
              ? face3
              : face4
          }
          alt="faces"
        />
        <button onClick={this.getRight}>
          <img src={rightarrow} alt="rightbutton" />
        </button>
      </div>
    );
  }
}

export default Carousel;
