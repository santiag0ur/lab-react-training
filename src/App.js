import React from 'react';
import './App.css';
import IdCard from './IdCard';
import Greetings from './Greetings';
import RandomValule from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import Likes from './Likes';
import ClickablePicture from './components/ClickImage';
import Dice from './components/Dice';
import Dice1sec from './components/Dice1sec';
import Carousel from './components/Carousel';
import Numberstable from './components/Numberstable';
import Facebook from './components/Facebook';
import FacebookAd from './components/FacebookAd';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="de" name="Ludwing" />
      <Greetings lang="es" name="Javier" />
      <RandomValule min={1} max={6} />
      <RandomValule min={1} max={100} />
      <BoxColor r={1} g={100} b={245} />
      <BoxColor r={150} g={200} b={54} />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="BNP"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
      <Rating rating={1.45} />
      <Rating rating={3.53} />
      <Rating rating={0} />
      <Rating rating={5} />
      <Rating rating={-3} />
      <Rating rating={8} />
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <Likes />
      <ClickablePicture />
      <br />
      <Dice />
      <Dice1sec />
      <br />
      <Carousel />
      <br />
      <Numberstable number={17} />
      <br />
      <Facebook />
      <br />
      <FacebookAd />
    </div>
  );
}

export default App;
