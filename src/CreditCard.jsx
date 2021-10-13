import './CreditCard.css';
import logovisa from './visa.png';
import logomaster from './mastercard-logo.png';

const CreditCard = (props) => {
  let cardlogo = '';
  if (props.type === 'Master Card') {
    cardlogo = logomaster;
  }
  if (props.type === 'Visa') {
    cardlogo = logovisa;
  } else {
  }

  let lastNumbers = props.number.slice(
    props.number.length - 4,
    props.number.length
  );

  let expirationToShow =
    props.expirationMonth < 10
      ? `0${props.expirationMonth}`
      : props.expirationMonth;

  let expYear = props.expirationYear - 2000;

  return (
    <div className="Card" style={{ backgroundColor: props.bgColor }}>
      <div className="DivLogoCard">
        <img src={cardlogo} alt="logo-card" height="15px" width="25px" />
      </div>
      <div className="DivCardNumber">
        <strong className="Dots">···· ···· ···· </strong> &nbsp; {lastNumbers}
      </div>
      <div className="DivCardName">
        <p>
          Expires {expirationToShow}/{expYear} {props.bank}
        </p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
