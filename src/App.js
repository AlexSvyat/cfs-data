import React from "react";
import HeaderRow from "./HeaderRow";
import Loading from "./Loading";
import DataRows from "./DataRows";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      cfsData: []
    };

    this.load20RandomFacts = this.load20RandomFacts.bind(this);
  }

  load20RandomFacts() {
    this.setState({ loading: true });

    // To workaround CORS issue when calling from localhost, we use proxy server to capture the data
    // found at: https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=20"; // site that doesn’t send Access-Control-*

    fetch(proxyUrl + url, {
      method: "GET",
      mode: "cors",
      headers: { "Access-Control-Allow-Origin": "*" }
    })
      .then(res => {
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        return res.json();
      })
      .then(cfsData => {
        this.setState({ cfsData, loading: false });
      })
      .catch(error => {
        console.error("ERROR: Failed to get data from API : " + error.message);
      });
  }
  componentDidMount() {
    this.load20RandomFacts();
  }

  render() {
    return (
      <div>
        <h2>CFS data</h2>
        <button disabled={this.state.loading} onClick={this.load20RandomFacts}>
          {this.state.loading
            ? "Loading, please wait.."
            : "Get another 20 random facts"}
        </button>
        <table>
          <HeaderRow />
          {this.state.loading ? (
            <Loading />
          ) : (
            <DataRows dataRecords={this.state.cfsData} />
          )}
        </table>
        <p>Data loaded with {this.state.cfsData.length} records</p>
      </div>
    );
  }
}

export default App;
