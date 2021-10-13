import React from 'react';
import './Likes.css';

class Likes extends React.Component {
  constructor() {
    super();
    /*this.color1,
      this.color2,
      this.color3,
      this.color4,
      this.color5
      this.color6 = '';*/
    this.state = {
      count: 0,
      color: 'purple',
    };
    console.log('Component is instantiated');
  }

  handleIncrement = (event) => {
    console.log('Incrementing count', event);
    this.setState({
      count: this.state.count + 1,
    });
    this.changeBackground();
    this.setState({
      color: this.colorx,
    });
    console.log(this.state.color);
  };

  changeBackground = () => {
    if ((this.state.count + 1) % 6 === 0) {
      console.log(this.state.count);
      console.log('the rest is 0');
      this.colorx = 'purple';
      return (
        <div className="Likes">
          <button className="firstcolor" onClick={this.handleIncrement}>
            {this.state.count}Likes
          </button>
        </div>
      );
    }
    if ((this.state.count + 1) % 6 === 1) {
      console.log(this.state.count);
      console.log('the rest is 1');
      this.colorx = 'blue';
    }
    if ((this.state.count + 1) % 6 === 2) {
      console.log(this.state.count);
      console.log('the rest is 2');
      this.colorx = 'green';
    }
    if ((this.state.count + 1) % 6 === 3) {
      console.log(this.state.count);
      console.log('the rest is 3');
      this.colorx = 'yellow';
    }
    if ((this.state.count + 1) % 6 === 4) {
      console.log(this.state.count);
      console.log('the rest is 4');
      this.colorx = 'oranje';
    }
    if ((this.state.count + 1) % 6 === 5) {
      console.log(this.state.count);
      console.log('the rest is 5');
      this.colorx = 'red';
    }
  };

  render() {
    console.log('Rendering component');
    return (
      <div className="Likes">
        <button
          className={
            this.colorx === 'purple'
              ? 'firstcolor'
              : this.colorx === 'blue'
              ? 'secondcolor'
              : this.colorx === 'green'
              ? 'thirdcolor'
              : this.colorx === 'yellow'
              ? 'fourthcolor'
              : this.colorx === 'oranje'
              ? 'fifthcolor'
              : this.colorx === 'red'
              ? 'sixthcolor'
              : 'firstcolor'
          }
          onClick={this.handleIncrement}
        >
          {this.state.count}Likes
        </button>
      </div>
    );
  }
}

export default Likes;
