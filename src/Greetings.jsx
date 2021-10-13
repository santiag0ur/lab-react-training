import './Greetings.css';

const Greetings = (props) => {
  console.log(`props: ${props}`);
  let language = props.lang;
  console.log(`language: ${language}`);
  if (language === 'de') {
    return (
      <div className="MessageGreeting">
        <p className="TextFromInside">Hallo {props.name}</p>
      </div>
    );
  }
  if (language === 'en') {
    return (
      <div className="MessageGreeting">
        <p className="TextFromInside">Hello {props.name}</p>
      </div>
    );
  }
  if (language === 'fr') {
    return (
      <div className="MessageGreeting">
        <p className="TextFromInside">Bonjour {props.name}</p>
      </div>
    );
  }
  if (language === 'es') {
    return (
      <div className="MessageGreeting">
        <p className="TextFromInside">Hola {props.name}</p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Greetings;
