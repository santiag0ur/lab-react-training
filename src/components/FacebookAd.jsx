import React from 'react';
import './FacebookAd.css';
import profiles from '../data/berlin.json';

class FacebookAd extends React.Component {
  constructor() {
    super();
    this.state = {
      All: false,
      USA: false,
      France: false,
      England: false,
      Malaysia: false,
      Germany: false,
      Sweden: false,
      Nigeria: false,
      Italy: false,
      Spain: false,
      Israel: false,
      Scotland: false,
      Kazakhstan: false,
      Brazil: false,
      Russia: false,
      Taiwan: false,
      Turkey: false,
      Norway: false,
      Unhide: [],
      Checkifshown: false,
      Profiles: profiles,
      SearchTerm: '',
    };
  }

  All = () => {
    this.setState((currentState) => {
      console.log(this.state.All);
      return { All: !currentState.All };
    });
  };
  USA = () => {
    this.setState((currentState) => {
      console.log(this.state.USA);
      return { USA: !currentState.USA };
    });
  };
  France = () => {
    this.setState((currentState) => {
      console.log(this.state.France);
      return { France: !currentState.France };
    });
  };
  England = () => {
    this.setState((currentState) => {
      console.log('England');
      console.log(this.state.England);
      return { England: !currentState.England };
    });
  };
  Malaysia = () => {
    this.setState((currentState) => {
      console.log(this.state.Malaysia);
      return { Malaysia: !currentState.Malaysia };
    });
  };
  Germany = () => {
    this.setState((currentState) => {
      console.log(this.state.Germany);
      return { Germany: !currentState.Germany };
    });
  };
  Sweden = () => {
    this.setState((currentState) => {
      console.log(this.state.Sweden);
      return { Sweden: !currentState.Sweden };
    });
  };
  Italy = () => {
    this.setState((currentState) => {
      console.log(this.state.Italy);
      return { Italy: !currentState.Italy };
    });
  };
  Nigeria = () => {
    this.setState((currentState) => {
      console.log(this.state.Nigeria);
      return { Nigeria: !currentState.Nigeria };
    });
  };
  Spain = () => {
    this.setState((currentState) => {
      console.log(this.state.Spain);
      return { Spain: !currentState.Spain };
    });
  };
  Scotland = () => {
    this.setState((currentState) => {
      console.log(this.state.Scotland);
      return { Scotland: !currentState.Scotland };
    });
  };
  Israel = () => {
    this.setState((currentState) => {
      console.log(this.state.Israel);
      return { Israel: !currentState.Israel };
    });
  };
  Kazakhstan = () => {
    this.setState((currentState) => {
      console.log(this.state.Kazakhstan);
      return { Kazakhstan: !currentState.Kazakhstan };
    });
  };
  Brazil = () => {
    this.setState((currentState) => {
      console.log(this.state.Brazil);
      return { Brazil: !currentState.Brazil };
    });
  };
  Russia = () => {
    this.setState((currentState) => {
      console.log(this.state.Russia);
      return { Russia: !currentState.Russia };
    });
  };
  Norway = () => {
    this.setState((currentState) => {
      console.log(this.state.Norway);
      return { Norway: !currentState.Norway };
    });
  };
  Turkey = () => {
    this.setState((currentState) => {
      console.log(this.state.Turkey);
      return { Turkey: !currentState.Turkey };
    });
  };
  Taiwan = () => {
    this.setState((currentState) => {
      console.log(this.state.Taiwan);
      return { Taiwan: !currentState.Taiwan };
    });
  };

  Unhide = (keyCard) => {
    let test1 = this.state.Unhide;
    let test2 = test1.includes(keyCard);
    if (test2) {
      test1.splice(test1.indexOf(keyCard), test1.indexOf(keyCard) + 1);
    } else {
      test1.push(keyCard);
    }
    this.setState(() => {
      return { Unhide: test1 };
    });
  };

  unHidetext = (keyforcheck) => {
    let test3 = this.state.Unhide.includes(keyforcheck);
    return test3;
  };

  sortByCountry = () => {
    console.log('Profiles');
    console.log(this.state.Profiles);
    let newOrder = this.state.Profiles.sort((a, b) =>
      a.country > b.country ? 1 : b.country > a.country ? -1 : 0
    );
    console.log('newOrder');
    console.log(newOrder);
    this.setState(() => {
      return { Profiles: newOrder };
    });
  };

  sortByName = () => {
    console.log('Profiles');
    console.log(this.state.Profiles);
    let newOrder = this.state.Profiles.sort((a, b) =>
      a.firstName > b.firstName ? 1 : b.firstName > a.firstName ? -1 : 0
    );
    console.log('newOrder');
    console.log(newOrder);
    this.setState(() => {
      return { Profiles: newOrder };
    });
  };

  setSearchTerm = (val) => {
    let valueToPass = val;
    this.setState(() => {
      return { SearchTerm: valueToPass };
    });
  };

  render() {
    return (
      <div>
        <>
          <div className="stock-container">
            <div>
              <button
                className={this.state.All ? 'buttonActive' : 'buttonInactive'}
                onClick={this.All}
              >
                All
              </button>
              <button
                className={this.state.USA ? 'buttonActive' : 'buttonInactive'}
                onClick={this.USA}
              >
                USA
              </button>
              <button
                className={
                  this.state.France ? 'buttonActive' : 'buttonInactive'
                }
                onClick={this.France}
              >
                France
              </button>
              <button
                className={
                  this.state.England ? 'buttonActive' : 'buttonInactive'
                }
                onClick={this.England}
              >
                England
              </button>
              <button
                className={
                  this.state.Malaysia ? 'buttonActive' : 'buttonInactive'
                }
                onClick={this.Malaysia}
              >
                Malaysia
              </button>
              <button
                className={
                  this.state.Germany ? 'buttonActive' : 'buttonInactive'
                }
                onClick={this.Germany}
              >
                Germany
              </button>
              <button
                className={
                  this.state.Sweden ? 'buttonActive' : 'buttonInactive'
                }
                onClick={this.Sweden}
              >
                Sweden
              </button>
              <button
                className={this.state.Italy ? 'buttonActive' : 'buttonInactive'}
                onClick={this.Italy}
              >
                Italy
              </button>
              <button
                className={
                  this.state.Nigeria ? 'buttonActive' : 'buttonInactive'
                }
                onClick={this.Nigeria}
              >
                Nigeria
              </button>
              <button
                className={this.state.Spain ? 'buttonActive' : 'buttonInactive'}
                onClick={this.Spain}
              >
                Spain
              </button>
              <button
                className={
                  this.state.Scotland ? 'buttonActive' : 'buttonInactive'
                }
                onClick={this.Scotland}
              >
                Scotland
              </button>
              <button
                className={
                  this.state.Israel ? 'buttonActive' : 'buttonInactive'
                }
                onClick={this.Israel}
              >
                Israel
              </button>
              <button
                className={
                  this.state.Kazakhstan ? 'buttonActive' : 'buttonInactive'
                }
                onClick={this.Kazakhstan}
              >
                Kazakhstan
              </button>
              <button
                className={
                  this.state.Brazil ? 'buttonActive' : 'buttonInactive'
                }
                onClick={this.Brazil}
              >
                Brazil
              </button>
              <button
                className={
                  this.state.Russia ? 'buttonActive' : 'buttonInactive'
                }
                onClick={this.Russia}
              >
                Russia
              </button>
              <button
                className={
                  this.state.Norway ? 'buttonActive' : 'buttonInactive'
                }
                onClick={this.Norway}
              >
                Norway
              </button>
              <button
                className={
                  this.state.Turkey ? 'buttonActive' : 'buttonInactive'
                }
                onClick={this.Turkey}
              >
                Turkey
              </button>
              <button
                className={
                  this.state.Taiwan ? 'buttonActive' : 'buttonInactive'
                }
                onClick={this.Taiwan}
              >
                Taiwan
              </button>
              <button onClick={this.sortByName}>Sort by Name</button>
              <button onClick={this.sortByCountry}>Sort by Country</button>
              <input
                type="text"
                placeholder="Search ..."
                onChange={(event) => {
                  this.setSearchTerm(event.target.value);
                }}
              />
            </div>
            {this.state.Profiles.filter((val) => {
              if (this.state.SearchTerm === '') {
                return val;
              } else if (
                val.firstName
                  .toLowerCase()
                  .includes(this.state.SearchTerm.toLowerCase())
              ) {
                return val;
              }
            }).map((data, key) => {
              let countryActive = false;
              let allContries = this.state.All;
              let keytopass = key;

              switch (data.country) {
                case 'USA':
                  countryActive = this.state.USA;
                  break;
                case 'England':
                  countryActive = this.state.England;
                  break;
                case 'France':
                  countryActive = this.state.France;
                  break;
                case 'Malaysia':
                  countryActive = this.state.Malaysia;
                  break;
                case 'Germany':
                  countryActive = this.state.Germany;
                  break;
                case 'Sweden':
                  countryActive = this.state.Sweden;
                  break;
                case 'Italy':
                  countryActive = this.state.Italy;
                  break;
                case 'Nigeria':
                  countryActive = this.state.Nigeria;
                  break;
                case 'Israel':
                  countryActive = this.state.Israel;
                  break;
                case 'Scotland':
                  countryActive = this.state.Scotland;
                  break;
                case 'Catalonia':
                  countryActive = this.state.Spain;
                  break;
                case 'Kazakhstan':
                  countryActive = this.state.Kazakhstan;
                  break;
                case 'Russia':
                  countryActive = this.state.Russia;
                  break;
                case 'Norway':
                  countryActive = this.state.Norway;
                  break;
                case 'Brazil':
                  countryActive = this.state.Brazil;
                  break;
                case 'Turkey':
                  countryActive = this.state.Turkey;
                  break;
                case 'Taiwan':
                  countryActive = this.state.Taiwan;
                  break;
                default:
                  countryActive = false;
              }

              /*  if (data.country === 'USA') {
                countryActive = this.state.USA;
              }
              if (data.country === 'France') {
                countryActive = this.state.France;
              }
              if (data.country === 'Malaysia') {
                countryActive = this.state.Malaysia;
              }
              if (data.country === 'England') {
                countryActive = this.state.England;
              } else {
                countryActive = false;
              }*/

              return (
                <div
                  className={
                    allContries
                      ? 'CardId3'
                      : countryActive
                      ? 'CardId3'
                      : 'CardId4'
                  }
                  key={key}
                >
                  <div>
                    <img
                      src={data.img}
                      alt="student portrait"
                      onClick={() => this.Unhide(keytopass)}
                    />
                  </div>
                  <div
                    className={
                      this.unHidetext(key) ? 'Blocktext' : 'Blocktextoff'
                    }
                  >
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
        ;
      </div>
    );
  }
}

export default FacebookAd;
