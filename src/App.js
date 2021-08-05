import React from "react";
import "./App.css";
import axios from "axios";

const baseUrl = `https://restcountries.eu/rest/v2/region/asia`;

class App extends React.Component {
  state = { states: [], mounted: false };
  componentWillMount() {
    axios.get(baseUrl).then((res) => {
      this.setState({ states: res.data });
      this.setState({ mounted: true });
      console.log(this.state.states, this.state.mounted);
    });
  }

  //capital, flag(display image for each country), region,
  //subregion, population, borders & languages.
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <h1>{this.state.mounted?this.state.states[0].name:""}</h1> */}
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
                      alt="flag"
                    />
                    <p key={eachState.name}>Name: {eachState.name}</p>
                    <p key={eachState.name}>Capital: {eachState.capital}</p>
                    <p key={eachState.name}>Region: {eachState.region}</p>
                    <p key={eachState.name}>Sub-region: {eachState.subregion}</p>
                    <p key={eachState.name}>Population: {eachState.population}</p>
                    <p key={eachState.name}>Borders:<br/>
                      {eachState.borders.map((eachBorder, index) => {
                        return <span key={index}>{eachBorder}&nbsp;&nbsp;</span>;
                      })}
                    </p>
                    <p key={eachState.name}>
                      Languages:<br/>
                      {eachState.languages.map((eachLanguage, index) => {
                        return<>
                            <p key={index}>{"   "}iso639_1: {eachLanguage.iso639_1}</p>
                            <p key={index}>{"   "}iso639_2: {eachLanguage.iso639_2}</p>
                            <p key={index}>{"   "}name: {eachLanguage.name}</p>
                            <p key={index}>{"   "}nativeName: {eachLanguage.nativeName}</p>
                        </>;
                      })}
                    </p>
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
