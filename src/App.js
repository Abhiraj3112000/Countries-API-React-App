import React from "react";
import "./App.css";
import axios from "axios";

const baseUrl = `https://restcountries.eu/rest/v2/region/asia`;

class App extends React.Component {
  state = { states: [], mounted: false };

  componentWillMount() {
    this.fetchData();
  }

  //Fetching data form REST-API
  fetchData() {
    axios.get(baseUrl).then((res) => {
      this.setState({ states: res.data });
      this.setState({ mounted: true });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button
            style={{
              marginTop: "30px",
              width: "200px",
              height: "50px",
              borderRadius: "5px",
            }}
            onClick={() => {
              this.fetchData();
              alert("Data refreshed from API");
            }}
          >
            <b>Refresh API</b>
          </button>
          {this.state.mounted
            ? this.state.states.map((eachState) => {
                return (
                  <div
                    style={{
                      marginTop: "2rem",
                      height: "wrap",
                      width: "80%",
                      boder: "",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      src={eachState.flag}
                      style={{ height: "200px", width: "300px" }}
                      alt="Flag"
                    />
                    <p key={eachState.name}>
                      <b>Name:</b> {eachState.name}
                    </p>
                    <p key={eachState.name}>
                      <b>Capital: </b>
                      {eachState.capital}
                    </p>
                    <p key={eachState.name}>
                      <b>Region: </b>
                      {eachState.region}
                    </p>
                    <p key={eachState.name}>
                      <b>Sub-region: </b>
                      {eachState.subregion}
                    </p>
                    <p key={eachState.name}>
                      <b>Population: </b>
                      {eachState.population}
                    </p>
                    <p key={eachState.name}>
                      <b>Borders:</b>
                      <br />
                      <br />
                      {eachState.borders.map((eachBorder, index) => {
                        return (
                          <span key={index}>{eachBorder}&nbsp;&nbsp;</span>
                        );
                      })}
                    </p>

                    <p key={eachState.name}>
                      <b>Languages:</b>
                      <br />
                      <hr style={{ width: "50%" }} />
                      {eachState.languages.map((eachLanguage, index) => {
                        return (
                          <>
                            <p key={index}>
                              iso639_1: {eachLanguage.iso639_1}
                            </p>
                            <p key={index}>
                              iso639_2: {eachLanguage.iso639_2}
                            </p>
                            <p key={index}>
                              name: {eachLanguage.name}
                            </p>
                            <p key={index}>
                              nativeName: {eachLanguage.nativeName}
                            </p>
                          </>
                        );
                      })}
                    </p>
                    <hr style={{ width: "100%" }} />
                  </div>
                );
              })
            : ""}
        </header>
      </div>
    );
  }
}

export default App;