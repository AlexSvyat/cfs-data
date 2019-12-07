import React from "react";
import HeaderRow from "./HeaderRow";
import Loading from "./Loading";
import DataRows from "./DataRows";
import {
  Spinner,
  Button,
  Table,
  Navbar,
  Nav,
  Form,
  FormControl
} from "react-bootstrap";
import { sampleSize } from "lodash";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      filteredCfsData: [],
      allCfsData: []
    };

    this.load20RandomFacts = this.load20RandomFacts.bind(this);
    this.loadAllFacts = this.loadAllFacts.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  // Will load all the data facts from the API
  loadAllFacts() {
    this.setState({ loading: true });

    this.fetchData("https://cat-fact.herokuapp.com/facts?animal_type=cat")
      .then(fetchedData =>
        this.setState({ allCfsData: fetchedData.all, loading: false })
      )
      .then(this.load20RandomFacts);
  }

  // Will load only 20 random data facts from the API
  load20RandomFacts() {
    this.setState({ loading: true });

    // Using Lodash SampleSize method to get 20 random items
    let newRandomArray = sampleSize(this.state.allCfsData, 20);

    this.setState({ filteredCfsData: newRandomArray, loading: false });
  }

  // Initial Component Mounting method
  componentDidMount() {
    this.loadAllFacts();
  }

  // Handles Search Submit request
  handleSearchSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true });

    let filterValue = event.target.elements.formSearchValue.value;

    // Filter out all the previously fetched data
    let filteredData = this.state.allCfsData.filter(function(rec) {
      return rec.text.toLowerCase().includes(filterValue.toLowerCase());
    });
    this.setState({
      filteredCfsData: filteredData,
      loading: false
    });
  }

  fetchData(url) {
    // URL site that doesn’t send Access-Control-*
    // To workaround CORS issue when calling from localhost, we use proxy server to capture the data
    // found at: https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";

    return fetch(proxyUrl + url, {
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
      .catch(error => {
        console.error("ERROR: Failed to get data from API : " + error.message);
      });
  }

  renderIcon() {
    if (this.state.loading) {
      return (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      );
    }
    return "Random load 20 more facts";
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">CFS Data</Navbar.Brand>

          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <Button
                size="sm"
                variant="outline-success"
                disabled={this.state.loading}
                onClick={this.load20RandomFacts}
              >
                {this.renderIcon()}
              </Button>
            </Nav.Link>
            <Form inline onSubmit={e => this.handleSearchSubmit(e)}>
              <Form.Group controlId="formSearchValue">
                <FormControl
                  size="sm"
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button size="sm" variant="outline-success" type="submit">
                  Search
                </Button>
              </Form.Group>
            </Form>
          </Nav>
        </Navbar>

        <Table striped hover size="sm">
          <HeaderRow />
          {this.state.loading ? (
            <Loading />
          ) : (
            <DataRows dataRecords={this.state.filteredCfsData} />
          )}
        </Table>
        <mark>
          Data loaded with {this.state.filteredCfsData.length} of filtered and{" "}
          {this.state.allCfsData.length} all records
        </mark>
      </div>
    );
  }
}

export default App;
