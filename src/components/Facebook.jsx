import './Facebook.css';

import profiles from '../data/berlin.json';

const Facebook = () => {
  return (
    <>
      <div className="stock-container">
        {profiles.map((data, key) => {
          return (
            <div className="CardId" key={key}>
              <div>
                <img src={data.img} alt="student portrait" />
              </div>
              <div className="Blocktext">
                <p>
                  <strong>First name: </strong>
                  {data.firstName}
                </p>
                <p>
                  <strong>Last Name: </strong>
                  {data.lastName}
                </p>
                <p>
                  <strong>Country: </strong>
                  {data.country}
                </p>
                <p>
                  <strong>Type: </strong>
                  {data.isStudent ? 'Student' : 'Teacher'}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Facebook;
